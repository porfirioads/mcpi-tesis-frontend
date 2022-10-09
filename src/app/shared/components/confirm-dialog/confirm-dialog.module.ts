import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './containers/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [CommonModule, FlexLayoutModule, MatDialogModule, MatButtonModule],
  exports: [ConfirmDialogComponent],
})
export class ConfirmDialogModule {}
