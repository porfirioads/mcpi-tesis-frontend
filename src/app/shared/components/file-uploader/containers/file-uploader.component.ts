import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Timer } from '../../../utils/timer';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements OnInit {
  @Input() label = 'Subir archivo';
  @Input() accept = '';
  @Output() fileUploaded = new EventEmitter<File | null>();
  uploading = false;

  constructor() {}

  ngOnInit(): void {}

  async uploadFiles($event: Event): Promise<void> {
    const files = ($event.target as HTMLInputElement).files;
    this.uploading = true;
    await Timer.delay(2);
    this.fileUploaded.emit(files ? files[0] : null);
    this.uploading = false;
  }
}
