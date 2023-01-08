import { NgModule } from '@angular/core';
import { TrainingComponent } from './containers/training/training.component';
import { SharedModule } from '../../shared/shared.module';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';
@NgModule({
  declarations: [TrainingComponent],
  imports: [SharedModule, PageTitleModule],
})
export class TrainingModule {}
