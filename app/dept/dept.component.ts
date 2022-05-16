import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent implements OnInit {
  name:any;
  constructor(private dialogRef:MatDialog,private router:Router) {
    this.name=localStorage.getItem("uname");
    if(this.name==null)
    this.router.navigateByUrl("");
   }
  open(){
    this.dialogRef.open(ProfileComponent);
   }
approval(){
  this.router.navigateByUrl("approval");
}

   logout(){
     localStorage.clear();
     this.router.navigateByUrl("");
   }
  ngOnInit(): void {
  }

}

