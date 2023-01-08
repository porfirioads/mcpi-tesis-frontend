import { NgModule } from '@angular/core';
import { ClassificationComponent } from './containers/classification/classification.component';
import { SharedModule } from '../../shared/shared.module';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';

@NgModule({
  declarations: [ClassificationComponent],
  imports: [SharedModule, PageTitleModule],
})
export class ClassificationModule {}
