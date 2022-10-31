import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ISingleChartItem } from '@src/app/shared/components/charts/interfaces/single-chart-item.interface';
import { CsvParserService } from '../../../services/csv-parser.service';

@Component({
  selector: 'app-csv-chart',
  templateUrl: './csv-chart.component.html',
  styleUrls: ['./csv-chart.component.scss'],
})
export class CsvChartComponent implements AfterViewInit, OnChanges {
  @Input() file!: File;
  @Input() delimiter = ',';
  @Input() header = true;
  records: any[] = [];
  chartsData: { [key: string]: ISingleChartItem[] } = {};

  constructor(private csvParserService: CsvParserService) {}

  ngAfterViewInit(): void {
    console.log('CsvChartComponent.ngAfterViewInit()');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CsvChartComponent.ngOnChanges()');
    if ('file' in changes) {
      this.loadRecords();
    }
  }

  async loadRecords() {
    this.records = await this.csvParserService.parseCsv(
      this.file,
      this.header,
      this.delimiter,
    );

    if (this.records.length) {
      this.loadSummary();
    }
  }

  async loadSummary() {
    this.chartsData = {};
    const keys = Object.keys(this.records[0]);
    this.records.forEach((record) => {
      keys.forEach((key) => {
        if (!this.chartsData[key]) {
          this.chartsData[key] = [
            {
              name: record[key],
              value: 1,
            },
          ];
        } else {
          const item = this.chartsData[key].find(
            (item) => item.name === record[key],
          );
          if (!item) {
            this.chartsData[key].push({
              name: record[key],
              value: 1,
            });
          } else {
            item.value++;
          }
        }
      });
    });
  }
}
