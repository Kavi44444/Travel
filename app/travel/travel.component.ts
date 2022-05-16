import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
name:any;
  constructor(private router:Router,private dialogRef:MatDialog) { 
    this.name=localStorage.getItem("uname");
    if(this.name==null)
    this.router.navigateByUrl("");
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
