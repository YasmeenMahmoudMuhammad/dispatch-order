import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExpiredLinkComponent } from './expired-link/expired-link.component';
import { ExpectedTimeComponent } from './expected-time/expected-time.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home' , component:HomeComponent},
  {path: 'expired-link' , component:ExpiredLinkComponent},
  {path: 'expected-time' , component:ExpectedTimeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
