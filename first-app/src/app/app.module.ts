import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';
/* 
  declarations -> UI entities are registered (component, directive, pipe) 
  providers -> NON UI entities are registered (services)
  imports -> registered other modules that this module depends on
  bootstrap -> top most component(s) using which the UI is rendered
*/
@NgModule({
  declarations: [
    AppComponent
    , GreeterComponent
    , SalaryCalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, GreeterComponent, SalaryCalculatorComponent]
})
export class AppModule { }
