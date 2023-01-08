import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogState,
} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DatasetsService } from '@src/app/services/datasets.service';
import { NotificationService } from '@src/app/services/notification.service';
import { LoadingComponent } from '@src/app/shared/components/loading/containers/loading/loading.component';
import { IFile } from '@src/app/shared/interfaces/dataset.interface';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-preprocessed',
  templateUrl: './preprocessed.component.html',
  styleUrls: ['./preprocessed.component.scss'],
})
export class PreprocessedComponent implements OnInit, AfterViewInit {
  private loadingDialog?: MatDialogRef<LoadingComponent>;
  dataSource?: MatTableDataSource<IFile>;
  columns = ['fileName', 'actions'];

  constructor(
    private matDialog: MatDialog,
    private datasetsService: DatasetsService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.loadDatasets();
  }

  async loadDatasets() {
    this.showLoading();

    try {
      const datasets = await lastValueFrom(
        this.datasetsService.getDatasets('cleaned'),
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
}
