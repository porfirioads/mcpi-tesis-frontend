import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsvTableModule } from '@src/app/shared/components/csv-viewer/components/csv-table/csv-table.module';
import { CsvChartModule } from './components/csv-chart/csv-chart.module';
import { NgxCsvParserModule } from 'ngx-csv-parser';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgxCsvParserModule],
  exports: [CsvTableModule, CsvChartModule],
})
export class CsvViewerModule {}
