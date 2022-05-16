import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../services/request.service';
import { Request } from "../models/request";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  request:Request;
  role:any;
  // id:any;
  // name:any;

  constructor(private requestservice:RequestService,
    private router:Router) {
      this.request=new Request();
      //this.role=localStorage.getItem("role");
      // this.id=localStorage.getItem("id");
      // this.name=localStorage.getItem("uname");
     }

     AddRequest(){
      //  this.request.eid=this.id;
      //  this.request.empname=this.name;
       this.request.mApproval="Processing";
       this.request.dApproval="Processing";
      this.requestservice.EmployeeRequest(this.request).subscribe(sample=>{
           console.log(sample);});
      //  if(this.role=="employee")
      //  {
         
      //   this.requestservice.EmployeeRequest(this.request).subscribe(sample=>{
      //     console.log(sample);});
      //  }
      // else if(this.role=='manager')
      // {
      //   this.requestservice.EmployeeRequest(this.request).subscribe(sample=>{
      //     console.log(sample);});
       
      // }
      // else if(this.role=="deptment")
      // {
      //   this.requestservice.EmployeeRequest(this.request).subscribe(sample=>{
      //     console.log(sample);});
      // }

      // else if(this.role=="facility")
      // {
      //   this.requestservice.EmployeeRequest(this.request).subscribe(sample=>{
      //     console.log(sample);});
      // }
      this.request=new Request();
     }

     reset(){
       this.request=new Request();
     }

  ngOnInit(): void {
  }

}
