import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizationComponent } from './visualization.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [VisualizationComponent],
  imports: [CommonModule, FlexLayoutModule],
})
export class VisualizationModule {}
