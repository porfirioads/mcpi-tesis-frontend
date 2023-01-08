import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogState,
} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DatasetsService } from '../../../../services/datasets.service';
import { lastValueFrom } from 'rxjs';
import { LoadingComponent } from '../../../../shared/components/loading/containers/loading/loading.component';
import { Router } from '@angular/router';
import { NotificationService } from '../../../../services/notification.service';
import { ConfirmDialogService } from '@src/app/shared/components/confirm-dialog/services/confirm-dialog.service';
import { IFile } from '@src/app/shared/interfaces/dataset.interface';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss'],
})
export class DatasetsComponent implements OnInit, AfterViewInit {
  private loadingDialog?: MatDialogRef<LoadingComponent>;
  dataSource?: MatTableDataSource<IFile>;
  columns = ['fileName', 'actions'];

  constructor(
    private matDialog: MatDialog,
    private datasetsService: DatasetsService,
    private router: Router,
    private notificationService: NotificationService,
    private confirmDialogService: ConfirmDialogService,
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.loadDatasets();
  }

  async loadDatasets() {
    this.showLoading();

    try {
      const datasets = await lastValueFrom(
        this.datasetsService.getDatasets('uploads'),
      );
      this.dataSource = new MatTableDataSource(datasets);
    } catch (err) {
      this.notificationService.error(
        'No se pudieron cargar los datasets, intente más tarde.',
      );
    }

    this.hideLoading();
  }

  async onFileUploaded(file: File | null) {
    if (!file) {
      return;
    }

    try {
      await lastValueFrom(
        this.datasetsService.uploadDataset({
          file: file,
          delimiter: ',',
          encoding: 'latin-1',
        }),
      );

      this.notificationService.info('Dataset subido con éxito');
    } catch (err) {
      this.notificationService.error(
        'No se pudo subir el dataset, intente más tarde.',
      );
      console.log(err);
    }

    await this.loadDatasets();
  }

  async onFileUploading(_file: File | null) {
    this.showLoading();
  }

  confirmPreprocess(fileName: string) {
    this.confirmDialogService.show(
      'Preprocesar dataset',
      '¿Estás seguro que deseas preprocesar el dataset?\n\nEsta tarea transformará el dataset y generará versiones con nuevas características, por lo que deberás esperar algunos minutos a que el proceso finalice.\n\nLos resultados podrás verlos en menú "Preprocesados".',
      [
        {
          color: 'primary',
          text: 'Cancelar',
          type: 'mat-stroked-button',
          action: () => {},
        },
        {
          color: 'primary',
          text: 'Continuar',
          type: 'mat-raised-button',
          action: () => {
            this.preprocess(fileName);
          },
        },
      ],
    );
  }

  private preprocess(fileName: string) {
    console.log('Preprocesanto dataset', fileName);
  }

  async downloadDataset(fileName: string) {
    try {
      const blob = await lastValueFrom(
        this.datasetsService.downloadDataset('uploads', fileName),
      );
      const anchor = document.createElement('a');
      anchor.download = fileName;
      anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
      anchor.click();
    } catch (err) {
      this.notificationService.error(
        'No se pudo descargar el dataset, intente más tarde.',
      );
      console.log(err);
    }
  }

  openDataset(fileName: string) {
    this.router.navigate([`/datasets/details/${fileName}`]);
  }

  showLoading() {
    if (this.loadingDialog?.getState() !== MatDialogState.OPEN) {
      this.loadingDialog = this.matDialog.open(LoadingComponent, {
        disableClose: true,
      });
    }
  }

  hideLoading() {
    this.loadingDialog?.close();
  }
}
