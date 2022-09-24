import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PageTitleModule } from './components/page-title/page-title.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    PageTitleModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    PageTitleModule,
  ],
})
export class SharedModule {}
