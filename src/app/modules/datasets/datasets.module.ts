import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasetsComponent } from './datasets.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DatasetsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class DatasetsModule {}
