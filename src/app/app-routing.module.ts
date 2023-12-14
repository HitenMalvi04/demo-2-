import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { SalaryComponent } from './salary/salary.component';
import { PalajComponent } from './palaj/palaj.component';

const routes: Routes = [
  {path:'', component:DeshboardComponent},
  {path:'attendance' , component:AttendanceComponent},
  {path:'salary', component:SalaryComponent},
  {path:'palaj', component:PalajComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
