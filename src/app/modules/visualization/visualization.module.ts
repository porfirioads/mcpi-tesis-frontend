import { NgModule } from '@angular/core';
import { VisualizationComponent } from './containers/visualization.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [VisualizationComponent],
  imports: [SharedModule],
})
export class VisualizationModule {}
