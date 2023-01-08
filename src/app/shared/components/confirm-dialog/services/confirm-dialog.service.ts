import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../containers/confirm-dialog/confirm-dialog.component';
import { IConfirmDialogButton } from '../interfaces/confirm-dialog-button.interface';
import { IConfirmDialog } from '../interfaces/confirm-dialog.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  constructor(private matDialog: MatDialog) {}

  show(title: string, message: string, buttons: IConfirmDialogButton[]) {
    const data: IConfirmDialog = {
      title,
      message,
      buttons,
    };

    this.matDialog.open(ConfirmDialogComponent, { data });
  }
}
