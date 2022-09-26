import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-csv-viewer',
  templateUrl: './csv-viewer.component.html',
  styleUrls: ['./csv-viewer.component.scss'],
})
export class CsvViewerComponent implements OnInit, OnChanges {
  @Input() file!: File;
  @Input() delimiter = ',';
  @Input() header = false;
  records: any[] = [];

  constructor(private ngxCsvParser: NgxCsvParser) {}

  ngOnInit(): void {}

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
