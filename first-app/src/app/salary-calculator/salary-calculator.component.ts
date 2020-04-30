import { Component, OnInit } from '@angular/core';

class SalaryCalculatorModel{
    basic : number = 0;
    hra : number = 0;
    da : number = 0;
    tax : number = 0;
    salary : number = 0;

    calculate(){
      const gross = this.basic + this.hra + this.da;
      const net = gross * ((100-this.tax)/100);
      this.salary = net;
    }
}

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css']
})
export class SalaryCalculatorComponent implements OnInit {

  model : SalaryCalculatorModel = new SalaryCalculatorModel();
  
  constructor() { }

  ngOnInit(): void {
  }

}
