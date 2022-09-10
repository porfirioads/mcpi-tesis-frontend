import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassificationComponent } from './classification.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ClassificationComponent],
  imports: [CommonModule, SharedModule],
})
export class ClassificationModule {}
