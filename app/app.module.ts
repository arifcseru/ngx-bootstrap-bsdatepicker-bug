import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
