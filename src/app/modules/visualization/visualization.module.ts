import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VisualizationComponent } from './containers/visualization.component';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';

@NgModule({
  declarations: [VisualizationComponent],
  imports: [CommonModule, FlexLayoutModule, PageTitleModule],
})
export class VisualizationModule {}
