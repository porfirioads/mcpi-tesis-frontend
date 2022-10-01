import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarRef,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';

type AlertType =
  | 'info-alert'
  | 'success-alert'
  | 'warning-alert'
  | 'error-alert';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  private alert(
    message: string,
    alertType: AlertType,
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this.snackBar.open(message, undefined, {
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: alertType,
      duration: 3000,
    });
  }

  info(message: string): MatSnackBarRef<TextOnlySnackBar> {
    return this.alert(message, 'info-alert');
  }

  success(message: string): MatSnackBarRef<TextOnlySnackBar> {
    return this.alert(message, 'success-alert');
  }

  warning(message: string): MatSnackBarRef<TextOnlySnackBar> {
    return this.alert(message, 'warning-alert');
  }

  error(message: string): MatSnackBarRef<TextOnlySnackBar> {
    return this.alert(message, 'error-alert');
  }
}
