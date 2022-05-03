import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:Register;
  constructor(private registerService:RegisterService) { 
    this.register=new Register();
  }
  insertEmp(){
   this.registerService.addUsers(this.register).subscribe(e=>{
     console.log(e);
   });
   this.register=new Register();
   }
  ngOnInit(): void {
  }

}
