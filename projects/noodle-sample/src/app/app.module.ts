import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoodleLibModule } from 'noodle-lib'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoodleLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
