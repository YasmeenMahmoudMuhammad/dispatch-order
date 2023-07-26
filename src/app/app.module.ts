import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomComponent } from './hom/hom.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RemixIconModule, RiAncientGateFill, RiCalendarLine, RiHome2Fill } from "angular-remix-icon";
import{RiStarFill} from "angular-remix-icon";
import {MatRadioModule} from '@angular/material/radio'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle';
const icons = {
  RiAncientGateFill,
  RiHome2Fill,
  RiStarFill,
  RiCalendarLine
};

@NgModule({
  declarations: [
    AppComponent,
    HomComponent
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
