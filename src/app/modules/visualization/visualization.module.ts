import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';
import { VisualizationComponent } from './containers/visualization.component';

@NgModule({
  declarations: [VisualizationComponent],
  imports: [CommonModule, FlexLayoutModule, SharedModule],
})
export class VisualizationModule {}
