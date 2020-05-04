import { Component, OnInit } from '@angular/core';
import { SalaryCalculatorModel } from './SalaryCalculatorModel';


@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css']
})
export class SalaryCalculatorComponent implements OnInit {

  //model : SalaryCalculatorModel = new SalaryCalculatorModel();
  
  /* 
  model : SalaryCalculatorModel = null;

  constructor(salaryCalculatorModel : SalaryCalculatorModel) { 
    this.model = salaryCalculatorModel;
  } 
  */

  constructor (public model : SalaryCalculatorModel){

  }

  ngOnInit(): void {
  }

}
