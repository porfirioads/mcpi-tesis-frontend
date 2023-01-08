import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsComponent } from './containers/metrics/metrics.component';
import { PageTitleModule } from '@src/app/shared/components/page-title/page-title.module';

@NgModule({
  declarations: [MetricsComponent],
  imports: [CommonModule, PageTitleModule],
})
export class MetricsModule {}
