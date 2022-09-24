import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './containers/page-title.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PageTitleComponent],
  imports: [CommonModule, RouterModule, FlexLayoutModule, MatIconModule],
  exports: [PageTitleComponent],
})
export class PageTitleModule {}
