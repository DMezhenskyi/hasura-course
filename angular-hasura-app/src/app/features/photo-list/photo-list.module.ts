import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PhotoListComponent } from './photo-list/photo-list.component';


@NgModule({
  declarations: [PhotoListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [PhotoListComponent]
})
export class PhotoListModule { }
