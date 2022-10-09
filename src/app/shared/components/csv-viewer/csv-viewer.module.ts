import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsvViewerComponent } from './containers/csv-viewer.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [CsvViewerComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    NgxCsvParserModule,
    FlexLayoutModule,
    MatTooltipModule,
  ],
  exports: [CsvViewerComponent],
})
export class CsvViewerModule {}
