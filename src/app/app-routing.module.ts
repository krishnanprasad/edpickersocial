import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './Page/landing-page/landing-page.component';
import { HomeComponent } from './User/home/home.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'Home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
