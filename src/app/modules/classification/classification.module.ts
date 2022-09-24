import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ClassificationComponent } from './containers/classification.component';

@NgModule({
  declarations: [ClassificationComponent],
  imports: [CommonModule, SharedModule],
})
export class ClassificationModule {}
