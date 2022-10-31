import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CsvParserService } from '../../../services/csv-parser.service';

@Component({
  selector: 'app-csv-table',
  templateUrl: './csv-table.component.html',
  styleUrls: ['./csv-table.component.scss'],
})
export class CsvTableComponent implements AfterViewInit, OnChanges {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() file!: File;
  @Input() delimiter = ',';
  @Input() header = true;
  @Input() pageSize = 10;
  displayedColumns!: string[];
  dataSource!: MatTableDataSource<any>;
  records: any[] = [];

  constructor(private csvParserService: CsvParserService) {}

  ngAfterViewInit(): void {
    console.log('CsvViewerComponent.ngAfterViewInit()');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CsvViewerComponent.ngOnChanges()');
    if ('file' in changes) {
      this.loadRecords();
    }
  }

  async loadRecords() {
    this.records = await this.csvParserService.parseCsv(
      this.file,
      this.header,
      this.delimiter,
    );

    if (this.records.length) {
      this.loadDataSource();
    }
  }

  async loadDataSource() {
    this.displayedColumns = Object.keys(this.records[0]);
    this.dataSource = new MatTableDataSource(this.records);
    this.dataSource.paginator = this.paginator;
  }
}
