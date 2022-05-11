import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { sample } from 'rxjs';
import { Login } from '../models/login';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name:any;
  constructor(private dialogRef:MatDialog) {
   this.name=localStorage.getItem("uname");
   }
   open(){
    this.dialogRef.open(ProfileComponent);
   }
 
  ngOnInit(): void {
   
  }

}
