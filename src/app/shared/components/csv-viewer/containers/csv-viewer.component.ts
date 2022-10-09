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
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-csv-viewer',
  templateUrl: './csv-viewer.component.html',
  styleUrls: ['./csv-viewer.component.scss'],
})
export class CsvViewerComponent implements AfterViewInit, OnChanges {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() file!: File;
  @Input() delimiter = ',';
  @Input() header = true;
  @Input() pageSize = 10;
  displayedColumns!: string[];
  dataSource!: MatTableDataSource<any>;
  records: any[] = [];

  constructor(private ngxCsvParser: NgxCsvParser) {}

  ngAfterViewInit(): void {
    console.log('CsvViewerComponent.ngAfterViewInit()');
    this.parseCsv();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CsvViewerComponent.ngOnChanges()');
    const parseFile = 'file' in changes || this.file;

    if (parseFile) {
      this.parseCsv();
    }
  }

  async parseCsv() {
    console.log('CsvViewerComponent.parseCsv()');

    const result = await lastValueFrom(
      this.ngxCsvParser.parse(this.file, {
        header: this.header,
        delimiter: this.delimiter,
      }),
    );

    if (result instanceof NgxCSVParserError) {
      console.log('Csv error', result);
      return;
    }

    this.records = result;
    this.displayedColumns = Object.keys(this.records[0]);
    this.dataSource = new MatTableDataSource(this.records);
    this.dataSource.paginator = this.paginator;
  }
}
