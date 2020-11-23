import { SigninGQL } from './../../../../generated/graphql';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private signinQuery: SigninGQL) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    this.signinQuery.mutate(this.form.value).subscribe(data => {
      localStorage.setItem('auth_token', data.data.login.accessToken);
      this.router.navigate(['profile', data.data.login.id]);
    });
  }

}
