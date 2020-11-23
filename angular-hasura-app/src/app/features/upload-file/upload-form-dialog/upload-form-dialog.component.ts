import { InsertPhotoGQL } from './../../../../generated/graphql';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-form-dialog',
  templateUrl: './upload-form-dialog.component.html',
  styleUrls: ['./upload-form-dialog.component.scss']
})
export class UploadFormDialogComponent implements OnInit {

  description: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { photoUrl: string },
    private insertPhoto: InsertPhotoGQL,
    private dialogRef: MatDialogRef<UploadFormDialogComponent>) { }

  ngOnInit(): void {
  }

  save(): void {
    this.insertPhoto.mutate({
      photoUrl: this.data.photoUrl,
      description: this.description
    }).subscribe(() => {
      this.dialogRef.close();
      // Home work. Implement page reloading
    });
  }

}
