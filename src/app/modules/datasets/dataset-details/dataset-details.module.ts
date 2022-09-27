import { NgModule } from '@angular/core';
import { DatasetDetailsComponent } from './containers/dataset-details.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [DatasetDetailsComponent],
  imports: [SharedModule],
})
export class DatasetDetailsModule {}
