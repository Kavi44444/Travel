import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  constructor(private dialogRef:MatDialog,private router:Router) {
   this.name=localStorage.getItem("uname");
   if(this.name==null)
   {
     this.router.navigateByUrl("");
   }
   }
   open(){
    this.dialogRef.open(ProfileComponent);
   }
   
   logout(){
      localStorage.clear();
      this.router.navigateByUrl("");
  }
 
  ngOnInit(): void {
   
  }

}
