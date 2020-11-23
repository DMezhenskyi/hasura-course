import { Observable } from 'rxjs';
import { Comments, GetPhotoGQL, GetPhotoQuery, InsertCommentGQL, InsertCommentMutation } from './../../../../generated/graphql';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { pluck } from 'rxjs/operators';
import { ApolloCache, FetchResult } from '@apollo/client/core';

@Component({
  selector: 'app-photo-details-dialog',
  templateUrl: './photo-details-dialog.component.html',
  styleUrls: ['./photo-details-dialog.component.scss']
})
export class PhotoDetailsDialogComponent implements OnInit {

  photo$: Observable<GetPhotoQuery['photos_by_pk']>;

  private queryWatcher = this.getPhoto.watch({ photoId: this.data.photoId });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { photoId: string },
    private getPhoto: GetPhotoGQL,
    private insertComment: InsertCommentGQL
  ) { }

  ngOnInit(): void {
    this.photo$ = this.queryWatcher.valueChanges.pipe(pluck('data', 'photos_by_pk'))
  }

  onSaveComment(comment: Pick<Comments, 'id' | 'comment'>): void {
    this.insertComment.mutate({
      comment: comment.comment,
      photoId: this.data.photoId
    }, {
      update: this.updateCache.bind(this)
    }).subscribe();
  }

  private updateCache(
    cache: ApolloCache<InsertCommentMutation>,
    { data: { insert_comments_one } }: FetchResult<InsertCommentMutation>): void {
      const options = {
        query: this.getPhoto.document,
        variables: { photoId: this.data.photoId },
      };
      const cachedData = cache.readQuery<GetPhotoQuery>(options);
      cache.writeQuery({
        ...options,
        data: {
          photos_by_pk: {
            ...cachedData.photos_by_pk,
            comments: [
              insert_comments_one, // comment we have added
              ...cachedData.photos_by_pk.comments // already fetched comments from cache
            ]
          }
        }
      })
    }

}
