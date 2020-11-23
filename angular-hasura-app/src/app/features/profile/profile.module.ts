import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UploadFileModule } from '../upload-file/upload-file.module';
import { PhotoListModule } from '../photo-list/photo-list.module';


@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    UploadFileModule,
    PhotoListModule
  ]
})
export class ProfileModule { }
