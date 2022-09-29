import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
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
  @Output() fileUploading = new EventEmitter<File | null>();

  uploading = false;

  constructor() {}

  ngOnInit(): void {}

  async onFilesChanged($event: Event): Promise<void> {
    const files = ($event.target as HTMLInputElement).files;

    if (files) {
      this.uploading = true;
      this.fileUploading.emit(files ? files[0] : null);
      await Timer.delay(2);
      this.uploading = false;
      this.fileUploaded.emit(files ? files[0] : null);
      ($event.target as HTMLInputElement).value = '';
    }
  }
}
