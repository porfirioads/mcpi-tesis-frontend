import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './containers/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule, MatProgressSpinnerModule, FlexLayoutModule],
  exports: [LoadingComponent],
})
export class LoadingModule {}
