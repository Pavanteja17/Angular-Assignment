import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employee?:Employee;
  constructor() {
    this.employee=new Employee();
    //initiate students array
    this.employee.employeeId=1;
    this.employee.employeeName='Pavanteja';
    this.employee.joinDate='22-Aug-2022';
    this.employee.salary="90,000";
  }

  ngOnInit(): void {
    
  }

}

