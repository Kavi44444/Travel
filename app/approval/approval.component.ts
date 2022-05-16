import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../services/request.service';
import { Request } from '../models/request';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {
  request:any;  
  urole:any;

  constructor(private requestservice:RequestService,
    private router:Router) {
      this.urole=localStorage.getItem("role");
      if(this.urole=='manager')
      {
        this.requestservice.getAllManager().subscribe(data=>{
          console.log(data);
          this.request=data 
        });
        
      }
      else if(this.urole=='dept'){
        this.requestservice.getAllHead().subscribe(data=>{
          console.log(data);
           this.request=data 
         });
      }
     }
    
     
     Ok(e:Request){
       if(this.urole=='manager')
       {e.dApproval="Processing";
       e.mApproval="Approved";
       this.requestservice.ManagerRequest(e).subscribe(sample=>{
        console.log(sample);
       });
       this.router.navigateByUrl("manager");
      }
      else if(this.urole=='dept')
      {
        e.dApproval="Approved";
        this.requestservice.DepartRequest(e).subscribe(sample=>{
         console.log(sample);
        });
        this.router.navigateByUrl("manager");
      }

     }
     Cancel(e:Request){
       if(this.urole=='manager')
       {
        e.mApproval="Rejected";
        e.dApproval="Rejected";
        this.requestservice.ManagerRequest(e).subscribe(sample=>{
         console.log(sample);
        });
        this.router.navigateByUrl("manager");
       }
       else if(this.urole=='dept')
       {
        e.dApproval="Rejected";
        this.requestservice.DepartRequest(e).subscribe(sample=>{
         console.log(sample);
        });
        this.router.navigateByUrl("manager");
       }
     }
  ngOnInit(): void {
  }

}
