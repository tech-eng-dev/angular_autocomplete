/**
 * Main module file
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { HomeModule } from './home/index';
import { CustomMaterialModule } from './app-material/index';

import { routes } from './app.routes';
import { DataService } from './services/dataService';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CustomMaterialModule,
    SharedModule,
    HomeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
