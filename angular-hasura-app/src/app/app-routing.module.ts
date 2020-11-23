import { IsLoggedInGuard } from './features/profile/is-logged-in.guard';
import { ProfilePageComponent } from './features/profile/profile-page/profile-page.component';
import { SignupPageComponent } from './features/signup/signup-page/signup-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninPageComponent } from './features/signin/signin-page/signin-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signup' },
  { path: 'signup', component: SignupPageComponent },
  { path: 'signin', component: SigninPageComponent },
  { path: 'profile/:id', component: ProfilePageComponent, canActivate: [IsLoggedInGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
