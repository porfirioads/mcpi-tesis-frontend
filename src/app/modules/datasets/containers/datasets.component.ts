import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { DatasetsService } from '../../../services/datasets.service';
import { IDataset } from '../../../shared/interfaces/dataset.interface';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss'],
})
export class DatasetsComponent implements OnInit, AfterViewInit {
  dataSource?: MatTableDataSource<IDataset>;

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
}
