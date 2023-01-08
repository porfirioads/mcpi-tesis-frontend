import { Component, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MatDialog,
  MatDialogState,
} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DatasetsService } from '@src/app/services/datasets.service';
import { NotificationService } from '@src/app/services/notification.service';
import { ConfirmDialogService } from '@src/app/shared/components/confirm-dialog/services/confirm-dialog.service';
import { LoadingComponent } from '@src/app/shared/components/loading/containers/loading/loading.component';
import { IFile } from '@src/app/shared/interfaces/dataset.interface';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-classified',
  templateUrl: './classified.component.html',
  styleUrls: ['./classified.component.scss'],
})
export class ClassifiedComponent implements OnInit {
  private loadingDialog?: MatDialogRef<LoadingComponent>;
  dataSource?: MatTableDataSource<IFile>;
  columns = ['fileName', 'actions'];

  constructor(
    private matDialog: MatDialog,
    private datasetsService: DatasetsService,
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
        this.datasetsService.getDatasets('classified'),
      );
      this.dataSource = new MatTableDataSource(datasets);
    } catch (err) {
      this.notificationService.error(
        'No se pudieron cargar los datasets, intente más tarde.',
      );
    }

    this.hideLoading();
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

  confirmCalculateMetrics(fileName: string) {
    this.confirmDialogService.show(
      'Calcular métricas de dataset',
      '¿Estás seguro que deseas calcular las métricas del dataset?\n\nEsta tarea realizará calculará las métricas para los algoritmos aplicados a los datos, por lo que deberás esperar algunos minutos a que el proceso finalice.\n\nLos resultados podrás verlos en menú "Clasificados".',
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
            this.calculateMetrics(fileName);
          },
        },
      ],
    );
  }

  private calculateMetrics(fileName: string) {
    console.log('Calculando métricas de dataset', fileName);
  }
}
