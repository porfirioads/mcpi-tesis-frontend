import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PageTitleModule } from './components/page-title/page-title.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    PageTitleModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    PageTitleModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
  ],
})
export class SharedModule {}
