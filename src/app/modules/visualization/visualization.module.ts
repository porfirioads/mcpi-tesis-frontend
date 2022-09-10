import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizationComponent } from './visualization.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [VisualizationComponent],
  imports: [CommonModule, FlexLayoutModule, SharedModule],
})
export class VisualizationModule {}
