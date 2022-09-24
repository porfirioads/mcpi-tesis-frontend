import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotFoundComponent } from './containers/not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [NotFoundComponent],
})
export class NotFoundModule {}
