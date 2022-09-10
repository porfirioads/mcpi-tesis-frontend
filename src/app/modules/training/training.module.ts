import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TrainingComponent],
  imports: [CommonModule, FlexLayoutModule, SharedModule],
})
export class TrainingModule {}
