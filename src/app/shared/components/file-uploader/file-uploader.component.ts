import { Component, Input, OnInit } from '@angular/core';
import { SimulationHelper } from '../../helpers/simulation.helper';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements OnInit {
  @Input() label = 'Subir archivo';
  uploading = false;

  constructor() {}

  ngOnInit(): void {}

  async uploadFiles($event: Event) {
    const files = ($event.target as HTMLInputElement).files;
    this.uploading = true;
    await SimulationHelper.delay(5);
    this.uploading = false;
  }
}
