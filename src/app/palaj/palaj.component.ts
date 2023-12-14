import { Component } from '@angular/core';

@Component({
  selector: 'app-palaj',
  templateUrl: './palaj.component.html',
  styleUrl: './palaj.component.css'
})
export class PalajComponent {
  card = [{id:1, EmpName:'Vacation', days:1, msg:'Available', EmpImg:'./assets/vacationleave.png'},
  {id:2, EmpName:'Casual Leave', days:2, msg:'Available', EmpImg:'./assets/casualleave.png'},
  {id:3, EmpName:'Floating Holiday', days:4, msg:'Available', EmpImg:'./assets/imd2.jpg'},
 ];
}
