import { PhotoDetailsDialogComponent } from './../../photo-details/photo-details-dialog/photo-details-dialog.component';
import { Observable } from 'rxjs';
import { GetUserPhotosGQL, GetUserPhotosQuery } from './../../../../generated/graphql';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos$: Observable<GetUserPhotosQuery['photos']>;

  constructor(
    private getUserPhoto: GetUserPhotosGQL,
    private route: ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.photos$ = this.route.params.pipe(
      switchMap(({ id }) => this.getUserPhoto.fetch({ userId: id })),
      map(({ data }) => data?.photos)
    );
  }

  onPhotoClick(photoId: string): void {
    this.dialog.open(PhotoDetailsDialogComponent, {
      data: { photoId }
    });
  }

}