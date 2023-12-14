import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { SalaryComponent } from './salary/salary.component';
import { PalajComponent } from './palaj/palaj.component';

@NgModule({
  declarations: [
    AppComponent,
    DeshboardComponent,
    AttendanceComponent,
    SalaryComponent,
    PalajComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
