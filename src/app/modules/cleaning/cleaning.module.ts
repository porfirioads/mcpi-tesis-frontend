import { NgModule } from '@angular/core';
import { CleaningComponent } from './containers/cleaning.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CleaningComponent],
  imports: [SharedModule],
})
export class CleaningModule {}
