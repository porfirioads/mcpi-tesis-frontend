import { NgModule } from '@angular/core';
import { ClassifiedComponent } from './containers/classified/classified.component';
import { SharedModule } from '../../shared/shared.module';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';

@NgModule({
  declarations: [ClassifiedComponent],
  imports: [SharedModule, PageTitleModule],
})
export class ClassifiedModule {}
