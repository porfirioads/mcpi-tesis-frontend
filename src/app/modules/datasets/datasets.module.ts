import { NgModule } from '@angular/core';
import { DatasetsComponent } from './containers/datasets.component';
import { FileUploaderModule } from '../../shared/components/file-uploader/file-uploader.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { SharedModule } from '../../shared/shared.module';
import { CsvTableModule } from '../../shared/components/csv-viewer/components/csv-table/csv-table.module';
import { DatasetsRoutingModule } from './datasets-routing.module';
import { DatasetDetailsModule } from './dataset-details/dataset-details.module';
import { SkeletonModule } from '../../shared/components/skeleton/skeleton.module';
import { LoadingModule } from '../../shared/components/loading/loading.module';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';
import { ConfirmDialogModule } from '@src/app/shared/components/confirm-dialog/confirm-dialog.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [DatasetsComponent],
  imports: [
    SharedModule,
    FileUploaderModule,
    MatTableModule,
    MatSortModule,
    CsvTableModule,
    DatasetsRoutingModule,
    DatasetDetailsModule,
    SkeletonModule,
    LoadingModule,
    PageTitleModule,
    ConfirmDialogModule,
    MatTabsModule,
  ],
})
export class DatasetsModule {}
