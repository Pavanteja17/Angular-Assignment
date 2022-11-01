import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';


const routes: Routes = [
  {path:'employee',component:ViewEmployeeComponent},
  {path:'employees',component:ViewEmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }