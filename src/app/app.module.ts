import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RemixIconModule, RiAncientGateFill, RiArrowRightSLine, RiCalendarLine, RiHome2Fill } from "angular-remix-icon";
import{RiStarFill} from "angular-remix-icon";
import {MatRadioModule} from '@angular/material/radio'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ExpiredLinkComponent } from './expired-link/expired-link.component';
import { ExpectedTimeComponent } from './expected-time/expected-time.component';
const icons = {
  RiAncientGateFill,
  RiHome2Fill,
  RiStarFill,
  RiCalendarLine,
  RiArrowRightSLine
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpiredLinkComponent,
    ExpectedTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    RemixIconModule.configure(icons),
    MatRadioModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
