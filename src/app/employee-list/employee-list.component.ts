import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  constructor(private _employeeService : EmployeeService){}

  public employee : any = [];

  ngOnInit(){
    this.employee = this._employeeService.getEmployees();
  }
}
