import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deshboard',
  templateUrl: './deshboard.component.html',
  styleUrl: './deshboard.component.css'
})
export class DeshboardComponent {
  showSalary(){
    Swal.fire({
      title: "Salary!",
      text: "Your Salary:",
      icon: "success"
    });
  }

  showRequest(){

  }
  showLeaveBalance(){
    
  }
  attendanceClick(){
    console.log("hiii")
  }
}
