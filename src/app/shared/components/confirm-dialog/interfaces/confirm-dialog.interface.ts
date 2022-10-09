import { IConfirmDialogButton } from './confirm-dialog-button.interface';

export interface IConfirmDialog {
  title: string;
  message: string;
  buttons: IConfirmDialogButton[];
}
