import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IDataset,
  IDatasetInput,
} from '../shared/interfaces/dataset.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DatasetsService {
  // TODO: Remove this line when connect app with backend.
  datasets: IDataset[] = [];

  constructor(private http: HttpClient) {}

  getDatasets(): Observable<string[]> {
    const url = `${environment.backend.uri}/datasets`;
    return this.http.get<string[]>(url);
  }

  getDataset(fileName: string): Observable<IDataset> {
    const url = `${environment.backend.uri}/datasets/${fileName}`;
    return this.http.get<IDataset>(url);
  }

  uploadDataset(data: IDatasetInput): Observable<IDataset> {
    const url = `${environment.backend.uri}/datasets/upload`;
    const formData = new FormData();
    formData.append('file', data.file);
    formData.append('encoding', data.encoding);
    formData.append('delimiter', data.delimiter);
    return this.http.post<IDataset>(url, formData);
  }

  deleteDataset(fileName: string): Observable<IDataset> {
    return new Observable((observer) => {
      setTimeout(() => {
        const datasetToDelete = this.datasets.find(
          (dataset) => fileName === fileName,
        );

        this.datasets = this.datasets.filter(
          (dataset) => fileName !== fileName,
        );

        observer.next(datasetToDelete);
        observer.complete();
      }, 1000);
    });
  }
}
