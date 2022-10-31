import { Injectable } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CsvParserService {
  constructor(private ngxCsvParser: NgxCsvParser) {}

  async parseCsv(
    file: File,
    header: boolean,
    delimiter: string,
  ): Promise<any[]> {
    console.log('CsvChartComponent.parseCsv()');

    const result = await lastValueFrom(
      this.ngxCsvParser.parse(file, { header, delimiter }),
    );

    if (result instanceof NgxCSVParserError) {
      console.log('Csv error', result);
      return [];
    }

    return result;
  }
}
