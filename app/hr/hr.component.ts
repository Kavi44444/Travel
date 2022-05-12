import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {
name:any;
  constructor(private router:Router,private dialogRef:MatDialog) {
    this.name=localStorage.getItem("uname");
    if(this.name=="null")
    this.router.navigateByUrl("");
   }
   register(){
     this.router.navigateByUrl("register");
   }
   open(){
    this.dialogRef.open(ProfileComponent);
   }
   view()
   {
      this.router.navigateByUrl("views");
   }
   logout(){
     localStorage.clear();
     this.router.navigateByUrl("");
   }
  ngOnInit(): void {
  }

}
