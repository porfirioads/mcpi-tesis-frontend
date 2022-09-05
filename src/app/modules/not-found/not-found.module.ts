import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, FlexLayoutModule],
})
export class NotFoundModule {}
