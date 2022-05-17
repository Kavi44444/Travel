import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Request } from '../models/request';
import { ProfileComponent } from '../profile/profile.component';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name:any;
  id:any;
  show:boolean=false;
  data:any=[]; 
  e:Request;
  constructor(private dialogRef:MatDialog,private router:Router,
   private requestservice:RequestService ) {
     this.e=new Request();
   this.name=localStorage.getItem("uname");
   this.id=localStorage.getItem("id");
   if(this.name==null)
   {
     this.router.navigateByUrl("");
   }
   }
   open(){
    this.dialogRef.open(ProfileComponent);
   }
   request(){
     this.router.navigateByUrl("request");
   }
   status(){
     this.e.eid=this.id;
    this.requestservice.getSingleEmployee(this.e).subscribe((sample)=>{
      console.log(sample);
     this.data=sample;
     console.log(this.data);      
     });
     this.show=!this.show;
   }
   trues()
   {
     this.show=!this.show;
   }
   logout(){
      localStorage.clear();
      this.router.navigateByUrl("");
  }
 
  ngOnInit(): void {
   
  }

}
