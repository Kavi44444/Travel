import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {
    views:any;
  constructor(private loginService:LoginService) { 
   
    loginService.getviews().subscribe((data)=>{
      console.log(data);
      this.views=data  
      });
  }

 
  ngOnInit(): void {
  }

}
