import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Page/landing-page/landing-page.component';
import { NavbarComponent } from './Common/navbar/navbar.component';
import { HomeComponent } from './User/home/home.component';
import { PostComponent } from './Common/post/post.component';
import { PostHeaderComponent } from './Common/post-header/post-header.component';
import { QapostComponent } from './Common/qapost/qapost.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    HomeComponent,
    PostComponent,
    PostHeaderComponent,
    QapostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
