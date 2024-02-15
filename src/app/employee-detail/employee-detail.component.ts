import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
   public employee : any = [];

   constructor(private _employeeService : EmployeeService){}

   ngOnInit(){
    this.employee = this._employeeService.getEmployees()
   }
}
