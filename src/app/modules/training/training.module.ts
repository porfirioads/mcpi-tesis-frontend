import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [TrainingComponent],
  imports: [CommonModule, FlexLayoutModule],
})
export class TrainingModule {}
