import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsvViewerComponent } from './containers/csv-viewer.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [CsvViewerComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  exports: [CsvViewerComponent],
})
export class CsvViewerModule {}
