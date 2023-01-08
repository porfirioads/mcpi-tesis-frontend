import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsvTableComponent } from './containers/csv-table/csv-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [CsvTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    FlexLayoutModule,
  ],
  exports: [CsvTableComponent],
})
export class CsvTableModule {}
