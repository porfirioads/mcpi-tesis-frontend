import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatasetsService } from '@src/app/services/datasets.service';
import { IDataset } from '../../../../../shared/interfaces/dataset.interface';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-dataset-details',
  templateUrl: './dataset-details.component.html',
  styleUrls: ['./dataset-details.component.scss'],
})
export class DatasetDetailsComponent implements OnInit {
  id!: string;
  dataset?: IDataset;
  datasetFile?: File;
  viewMode = 'chart';

  constructor(
    private route: ActivatedRoute,
    private datasetsService: DatasetsService,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.loadDataset();
  }

  async loadDataset() {
    this.dataset = await lastValueFrom(
      this.datasetsService.getDataset(this.id),
    );

    const blob = await lastValueFrom(
      this.datasetsService.downloadDataset('uploads', this.id),
    );

    this.datasetFile = new File([blob], this.id, { type: blob.type });
  }
}
