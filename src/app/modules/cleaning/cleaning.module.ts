import { NgModule } from '@angular/core';
import { CleaningComponent } from './containers/cleaning.component';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CleaningComponent],
  imports: [CommonModule, PageTitleModule],
})
export class CleaningModule {}
