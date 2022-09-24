import { NgModule } from '@angular/core';
import { TrainingComponent } from './containers/training.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TrainingComponent],
  imports: [SharedModule],
})
export class TrainingModule {}
