import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { DatasetsService } from '../../../services/datasets.service';
import { IDataset } from '../../../shared/interfaces/dataset.interface';
import { lastValueFrom } from 'rxjs';
import { NotFoundComponent } from '../../../shared/components/not-found/containers/not-found.component';
import { LoadingComponent } from '../../../shared/components/loading/containers/loading.component';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss'],
})
export class DatasetsComponent implements OnInit, AfterViewInit {
  private loadingDialog?: MatDialogRef<LoadingComponent>;
  dataSource?: MatTableDataSource<IDataset>;
  columns = ['fileName', 'actions'];

  constructor(
    private snackBar: MatSnackBar,
    private matDialog: MatDialog,
    private datasetsService: DatasetsService,
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.loadDatasets();
  }

  async loadDatasets() {
    const datasets = await lastValueFrom(this.datasetsService.getDatasets());
    this.dataSource = new MatTableDataSource(datasets);
    console.log(datasets);
  }

  async onFileUploaded(file: File | null) {
    if (!file) {
      return;
    }

    await lastValueFrom(this.datasetsService.uploadDataset(file));

    await this.loadDatasets();

    this.loadingDialog?.close();

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
    this.loadingDialog = this.matDialog.open(LoadingComponent, {
      disableClose: true,
    });
  }
}
