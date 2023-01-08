import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, RouterModule, FlexLayoutModule, MatButtonModule],
  exports: [NotFoundComponent],
})
export class NotFoundModule {}
