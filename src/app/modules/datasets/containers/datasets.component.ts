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
    private snackBar: MatSnackBar,
    private matDialog: MatDialog,
    private datasetsService: DatasetsService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.loadDatasets();
  }

  async loadDatasets() {
    this.showLoading();
    const datasets = await lastValueFrom(this.datasetsService.getDatasets());
    this.dataSource = new MatTableDataSource(datasets);
    this.hideLoading();
  }

  async onFileUploaded(file: File | null) {
    if (!file) {
      return;
    }

    await lastValueFrom(this.datasetsService.uploadDataset(file));

    await this.loadDatasets();

    // if (file) {
    //   const dialogData: ICsvViewer = {
    //     file: file,
    //     delimiter: ',',
    //     header: true,
    //   };
    //   this.matDialog.open(CsvViewerComponent, {
    //     data: dialogData,
    //     height: '90vh',
    //     maxHeight: '90vh',
    //     width: '90%',
    //     maxWidth: '90%',
    //   });

    //   // DATASETS.push({ name: file.name });
    //   // this.dataSource = new MatTableDataSource(DATASETS);
    //   // this.snackBar.open('El dataset se subió correctamente', 'Aceptar', {
    //   //   duration: 3000,
    //   //   verticalPosition: 'top',
    //   //   horizontalPosition: 'right',
    //   // });
    // }
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
