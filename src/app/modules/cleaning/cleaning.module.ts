import { NgModule } from '@angular/core';
import { CleaningComponent } from './containers/cleaning.component';
import { SharedModule } from '../../shared/shared.module';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';

@NgModule({
  declarations: [CleaningComponent],
  imports: [SharedModule, PageTitleModule],
})
export class CleaningModule {}
