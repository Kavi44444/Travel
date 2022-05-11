import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent implements OnInit {
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
