import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SimulationHelper } from '../../helpers/simulation.helper';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements OnInit {
  @Input() label = 'Subir archivo';
  @Output() fileUploaded = new EventEmitter<string | null>();
  uploading = false;

  constructor() {}

  ngOnInit(): void {}

  async uploadFiles($event: Event) {
    const files = ($event.target as HTMLInputElement).files;
    this.uploading = true;
    await SimulationHelper.delay(2);
    this.fileUploaded.emit(files ? files[0].name : null);
    this.uploading = false;
  }
}
