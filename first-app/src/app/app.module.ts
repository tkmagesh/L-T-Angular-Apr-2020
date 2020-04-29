import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
/* 
  declarations -> UI entities are registered (component, directive, pipe) 
  providers -> NON UI entities are registered (services)
  imports -> registered other modules that this module depends on
  bootstrap -> top most component(s) using which the UI is rendered
*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
