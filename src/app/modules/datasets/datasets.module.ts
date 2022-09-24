import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasetsComponent } from './containers/datasets.component';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';
import { FileUploaderModule } from '../../shared/components/file-uploader/file-uploader.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DatasetsComponent],
  imports: [
    CommonModule,
    PageTitleModule,
    FileUploaderModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class DatasetsModule {}
