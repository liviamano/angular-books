import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

import { LibraryDashboardModule } from './library-dashboard/library-dashboard.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    // custom modules
    AppRoutingModule,
    LibraryDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
