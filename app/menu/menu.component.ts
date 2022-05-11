import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private dialogRef:MatDialog) { }
   openDialog(){
     this.dialogRef.open(LoginComponent);
   }
  
  ngOnInit(): void {
  }

}
