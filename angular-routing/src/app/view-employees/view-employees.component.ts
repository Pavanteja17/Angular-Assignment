import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  employees:Employee[]=[];
  employee?:Employee;
  constructor() {
    this.employee=new Employee();
    //initiate students array
    this.employees=[
      {employeeId:1,employeeName:'Rohan',joinDate:"2--02-2022",salary:"Unavailable"},
      {employeeId:2,employeeName:'Rohan',joinDate:"2--02-2022",salary:"Unavailable"}
    ]
   }

  ngOnInit(): void {
  }

}
