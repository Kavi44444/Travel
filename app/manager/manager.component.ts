import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
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
