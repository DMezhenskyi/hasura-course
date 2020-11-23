import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { SignupModule } from './features/signup/signup.module';
import { SigninModule } from './features/signin/signin.module';
import { ProfileModule } from './features/profile/profile.module';
import { PhotoDetailsModule } from './features/photo-details/photo-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    SignupModule,
    SigninModule,
    ProfileModule,
    PhotoDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
