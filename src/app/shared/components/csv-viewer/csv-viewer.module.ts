import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsvViewerComponent } from './containers/csv-viewer.component';

@NgModule({
  declarations: [CsvViewerComponent],
  imports: [CommonModule],
  exports: [CsvViewerComponent],
})
export class CsvViewerModule {}
