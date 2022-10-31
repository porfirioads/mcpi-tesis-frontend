import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsvChartComponent } from './containers/csv-chart.component';
import { ChartsModule } from '../../../charts/charts.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CsvChartComponent],
  imports: [CommonModule, ChartsModule, FlexLayoutModule, MatCardModule],
  exports: [CsvChartComponent],
})
export class CsvChartModule {}
