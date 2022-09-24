import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassificationComponent } from './containers/classification.component';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';

@NgModule({
  declarations: [ClassificationComponent],
  imports: [CommonModule, PageTitleModule],
})
export class ClassificationModule {}
