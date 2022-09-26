import { NgModule } from '@angular/core';
import { ClassificationComponent } from './containers/classification.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ClassificationComponent],
  imports: [SharedModule],
})
export class ClassificationModule {}
