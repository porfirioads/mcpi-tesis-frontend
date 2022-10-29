import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatasetsService } from '@src/app/services/datasets.service';
import { IDataset } from '../../../../shared/interfaces/dataset.interface';
import { lastValueFrom } from 'rxjs';
import { ISingleChartItem } from '@src/app/shared/components/charts/interfaces/single-chart-item.interface';

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

  data: ISingleChartItem[] = [
    {
      name: 'Germany',
      value: 8940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
    {
      name: 'France',
      value: 7200000,
    },
  ];

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
      this.datasetsService.downloadDataset(this.id),
    );

    this.datasetFile = new File([blob], this.id, { type: blob.type });
  }
}
