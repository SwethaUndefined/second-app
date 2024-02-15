import { Injectable } from '@angular/core';
 
@Injectable({  //this tells this is service file not a normal class
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return[
      {"id" : 1, "name" : "Andrew",age:30},
      {"id" : 2, "name" : "Bradon",age:25},
      {"id" : 3, "name" : "Christina",age:26},
      {"id" : 4, "name" : "Elena",age:28}
    ]
  }
}
