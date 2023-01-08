import { NgModule } from '@angular/core';
import { CleaningComponent } from './containers/cleaning/cleaning.component';
import { SharedModule } from '../../shared/shared.module';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [CleaningComponent],
  imports: [SharedModule, PageTitleModule, MatTableModule, MatSortModule],
})
export class CleaningModule {}
