import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasetsComponent } from './datasets.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [DatasetsComponent],
  imports: [CommonModule, MatTableModule, MatSortModule],
})
export class DatasetsModule {}
