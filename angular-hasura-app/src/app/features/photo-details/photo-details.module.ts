import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailsDialogComponent } from './photo-details-dialog/photo-details-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { CommentModule } from '../comment/comment.module';



@NgModule({
  declarations: [PhotoDetailsDialogComponent],
  imports: [
    CommonModule,
    MatCardModule,
    CommentModule
  ]
})
export class PhotoDetailsModule { }
