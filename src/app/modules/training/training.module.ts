import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TrainingComponent } from './containers/training.component';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';

@NgModule({
  declarations: [TrainingComponent],
  imports: [CommonModule, FlexLayoutModule, PageTitleModule],
})
export class TrainingModule {}
