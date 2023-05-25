import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgxView360Module } from "@egjs/ngx-view360";
import { MatInputModule } from '@angular/material/input';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxView360Module,
    MatInputModule,
    SearchBarComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
