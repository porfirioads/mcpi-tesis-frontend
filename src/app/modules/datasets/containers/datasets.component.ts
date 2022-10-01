import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogState,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { DatasetsService } from '../../../services/datasets.service';
import { lastValueFrom } from 'rxjs';
import { LoadingComponent } from '../../../shared/components/loading/containers/loading.component';
import { Router } from '@angular/router';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss'],
})
export class DatasetsComponent implements OnInit, AfterViewInit {
  private loadingDialog?: MatDialogRef<LoadingComponent>;
  dataSource?: MatTableDataSource<string>;
  columns = ['fileName', 'actions'];

  constructor(
    private matDialog: MatDialog,
    private datasetsService: DatasetsService,
    private router: Router,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.loadDatasets();
  }

  async loadDatasets() {
    this.showLoading();

    try {
      const datasets = await lastValueFrom(this.datasetsService.getDatasets());
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

      this.notificationService.success('Dataset subido con éxito');
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

  deleteDataset(fileName: string) {
    throw new Error('Method not implemented.');
  }

  downloadDataset(fileName: string) {
    throw new Error('Method not implemented.');
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
