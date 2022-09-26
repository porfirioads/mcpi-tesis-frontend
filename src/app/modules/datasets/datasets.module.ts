import { NgModule } from '@angular/core';
import { DatasetsComponent } from './containers/datasets.component';
import { FileUploaderModule } from '../../shared/components/file-uploader/file-uploader.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { SharedModule } from '../../shared/shared.module';
import { CsvViewerModule } from '../../shared/components/csv-viewer/csv-viewer.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DatasetsComponent],
  imports: [
    CommonModule,
    SharedModule,
    FileUploaderModule,
    MatTableModule,
    MatSortModule,
    CsvViewerModule,
  ],
})
export class DatasetsModule {}
