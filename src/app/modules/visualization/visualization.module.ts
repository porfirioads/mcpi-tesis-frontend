import { NgModule } from '@angular/core';
import { VisualizationComponent } from './containers/visualization/visualization.component';
import { SharedModule } from '../../shared/shared.module';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';
@NgModule({
  declarations: [VisualizationComponent],
  imports: [SharedModule, PageTitleModule],
})
export class VisualizationModule {}
