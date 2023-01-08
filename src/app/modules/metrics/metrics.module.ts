import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsComponent } from './containers/metrics/metrics.component';
import { PageTitleModule } from '@src/app/shared/components/page-title/page-title.module';
import { SharedModule } from '@src/app/shared/shared.module';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [MetricsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PageTitleModule,
    MatTableModule,
    MatSortModule,
  ],
})
export class MetricsModule {}
