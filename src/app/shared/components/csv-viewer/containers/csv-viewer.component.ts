import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { lastValueFrom } from 'rxjs';
import { ICsvViewer } from '../interfaces/csv-viewer.interface';

@Component({
  selector: 'app-csv-viewer',
  templateUrl: './csv-viewer.component.html',
  styleUrls: ['./csv-viewer.component.scss'],
})
export class CsvViewerComponent implements AfterViewInit, OnChanges {
  @Input() file!: File;
  @Input() delimiter = ',';
  @Input() header = false;
  records: any[] = [];

  constructor(
    private ngxCsvParser: NgxCsvParser,
    @Inject(MAT_DIALOG_DATA) public data: ICsvViewer,
  ) {
    this.file = data.file;
    this.delimiter = data.delimiter ?? this.delimiter;
    this.header = data.header ?? this.header;
  }

  ngAfterViewInit(): void {
    this.parseCsv();
  }

  ngOnChanges(changes: SimpleChanges): void {
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
    console.log('Csv records', this.records);
  }
}
