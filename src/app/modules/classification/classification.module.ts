import { NgModule } from '@angular/core';
import { ClassificationComponent } from './containers/classification.component';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ClassificationComponent],
  imports: [CommonModule, PageTitleModule],
})
export class ClassificationModule {}
