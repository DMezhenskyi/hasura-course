import { SignupGQL } from './../../../../generated/graphql';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private signupQuery: SignupGQL) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      displayName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  onSubmit(): void {
    this.signupQuery.mutate(this.form.value).subscribe(() => {
      this.router.navigate(['signin']);
      this.form.reset();
    });
  }

}
