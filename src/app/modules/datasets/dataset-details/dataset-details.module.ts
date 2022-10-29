import { NgModule } from '@angular/core';
import { DatasetDetailsComponent } from './containers/dataset-details.component';
import { SharedModule } from '../../../shared/shared.module';
import { PageTitleModule } from '../../../shared/components/page-title/page-title.module';
import { CsvViewerModule } from '@src/app/shared/components/csv-viewer/csv-viewer.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ChartsModule } from '@src/app/shared/components/charts/charts.module';

@NgModule({
  declarations: [DatasetDetailsComponent],
  imports: [
    SharedModule,
    PageTitleModule,
    CsvViewerModule,
    MatButtonToggleModule,
    ChartsModule,
  ],
})
export class DatasetDetailsModule {}
