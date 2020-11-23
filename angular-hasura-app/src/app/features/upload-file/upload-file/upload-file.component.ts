import { UploadPhotoGQL } from './../../../../generated/graphql';
import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { UploadFormDialogComponent } from '../upload-form-dialog/upload-form-dialog.component';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  constructor(private uploadPhoto: UploadPhotoGQL, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onFileSelected(files: FileList): void {
    const file = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    fromEvent(reader, 'loadend').pipe(
      switchMap(() => this.uploadPhoto.mutate({ base64image: reader.result as string }))
    ).subscribe(({ data: { upload_photo } }) => {
      this.dialog.open(UploadFormDialogComponent, {
        data: {
          photoUrl: upload_photo.url[0]
        }
      })
    })
  }

}
