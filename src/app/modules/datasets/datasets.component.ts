import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Dataset {
  name: string;
  weight: string;
}

const DATASETS: Dataset[] = [
  { name: '1659804589_respuestas_tucson.csv', weight: '100MB' },
  { name: '1659804595_otro_dataset.csv', weight: '55MB' },
];

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss'],
})
export class DatasetsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight', 'actions'];
  dataSource = new MatTableDataSource(DATASETS);

  ngOnInit(): void {}

  constructor() {}

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
}
