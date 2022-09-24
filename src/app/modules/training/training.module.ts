import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';
import { TrainingComponent } from './containers/training.component';

@NgModule({
  declarations: [TrainingComponent],
  imports: [CommonModule, FlexLayoutModule, SharedModule],
})
export class TrainingModule {}
