import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './containers/line-chart/line-chart.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [LineChartComponent],
  imports: [CommonModule, FlexLayoutModule, NgxChartsModule],
  exports: [LineChartComponent],
})
export class LineChartModule {}
