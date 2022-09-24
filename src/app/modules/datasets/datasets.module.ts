import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../../shared/shared.module';
import { FileUploaderModule } from '../../shared/components/file-uploader/file-uploader.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { DatasetsComponent } from './containers/datasets.component';

@NgModule({
  declarations: [DatasetsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatSortModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    FileUploaderModule,
    MatSnackBarModule,
    NgxCsvParserModule,
  ],
})
export class DatasetsModule {}
