import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';
import { ProductsComponent } from './products/products.component'

import { SalaryCalculatorModel } from './salary-calculator/SalaryCalculatorModel';
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
    , ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SalaryCalculatorModel
  ],
  bootstrap: [
    AppComponent
    , GreeterComponent
    , ProductsComponent
  ]
})
export class AppModule { }
