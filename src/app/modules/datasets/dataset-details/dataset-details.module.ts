import { NgModule } from '@angular/core';
import { DatasetDetailsComponent } from './containers/dataset-details.component';
import { SharedModule } from '../../../shared/shared.module';
import { PageTitleModule } from '../../../shared/components/page-title/page-title.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CsvViewerModule } from '../../../shared/components/csv-viewer/csv-viewer.module';

@NgModule({
  declarations: [DatasetDetailsComponent],
  imports: [
    SharedModule,
    PageTitleModule,
    MatButtonToggleModule,
    CsvViewerModule,
  ],
})
export class DatasetDetailsModule {}
