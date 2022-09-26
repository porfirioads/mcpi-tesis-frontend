import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CsvViewerComponent } from '../../../shared/components/csv-viewer/containers/csv-viewer.component';
import { ICsvViewer } from '../../../shared/components/csv-viewer/interfaces/csv-viewer.interface';

export interface Dataset {
  name: string;
}

const DATASETS: Dataset[] = [
  { name: '1659804589_respuestas_tucson.csv' },
  { name: '1659804595_otro_dataset.csv' },
];

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss'],
})
export class DatasetsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'actions'];
  dataSource = new MatTableDataSource(DATASETS);

  constructor(private snackBar: MatSnackBar, private matDialog: MatDialog) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onFileUploaded(file: File | null) {
    if (file) {
      const dialogData: ICsvViewer = {
        file: file,
        delimiter: ',',
        header: true,
      };
      this.matDialog.open(CsvViewerComponent, {
        data: dialogData,
        maxHeight: '90vh',
        maxWidth: '90%',
      });

      // DATASETS.push({ name: file.name });
      // this.dataSource = new MatTableDataSource(DATASETS);
      // this.snackBar.open('El dataset se subió correctamente', 'Aceptar', {
      //   duration: 3000,
      //   verticalPosition: 'top',
      //   horizontalPosition: 'right',
      // });
    }
  }
}
