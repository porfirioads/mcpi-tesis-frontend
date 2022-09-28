import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataset } from '../shared/interfaces/dataset.interface';

@Injectable({
  providedIn: 'root',
})
export class DatasetsService {
  // TODO: Remove this line when connect app with backend.
  datasets: IDataset[] = [];

  constructor() {}

  getDatasets(): Observable<IDataset[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.datasets);
        observer.complete();
      }, 2000);
    });
  }

  uploadDataset(file: File): Observable<IDataset> {
    const dataset: IDataset = {
      fileName: file.name,
    };
    return new Observable((observer) => {
      setTimeout(() => {
        this.datasets.push(dataset);
        observer.next(dataset);
        observer.complete();
      }, 2000);
    });
  }

  deleteDataset(fileName: string): Observable<IDataset> {
    return new Observable((observer) => {
      setTimeout(() => {
        const datasetToDelete = this.datasets.find(
          (dataset) => dataset.fileName === fileName,
        );

        this.datasets = this.datasets.filter(
          (dataset) => dataset.fileName !== fileName,
        );

        observer.next(datasetToDelete);
        observer.complete();
      }, 2000);
    });
  }
}
