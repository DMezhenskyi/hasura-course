import { Observable } from 'rxjs';
import { GetProfileGQL, GetProfileQuery } from './../../../../generated/graphql';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  profile$: Observable<GetProfileQuery['user_profile']>;

  constructor(
    private route: ActivatedRoute,
    private profileQuery: GetProfileGQL
  ) { }

  ngOnInit(): void {
    this.profile$ = this.route.params.pipe(
      switchMap(({ id }) => this.profileQuery.fetch({ id })),
      pluck('data', 'user_profile')
    );
  }

}
