import { NgModule } from '@angular/core';
import { PreprocessedComponent } from './containers/preprocessed/preprocessed.component';
import { SharedModule } from '../../shared/shared.module';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [PreprocessedComponent],
  imports: [SharedModule, PageTitleModule, MatTableModule, MatSortModule],
})
export class CleaningModule {}
