import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
export class DatasetsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'actions'];
  dataSource = new MatTableDataSource(DATASETS);

  ngOnInit(): void {}

  constructor(private snackBar: MatSnackBar) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      console.log(`Sorted ${sortState.direction} by ${sortState.active}`);
    } else {
      console.log('Sorting cleared');
    }
  }

  onFileUploaded(file: File | null) {
    console.log(file);
    if (file) {
      DATASETS.push({ name: file.name });
      this.dataSource = new MatTableDataSource(DATASETS);
      this.snackBar.open('El dataset se subió correctamente', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
    }
  }
}
