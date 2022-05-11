import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Login } from "../models/login";
import { Register } from "../models/register";
import { LoginService } from "../services/login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:Login;

  constructor(private loginService:LoginService,
    private router:Router,private dialogRef:MatDialog) {
    this.user=new Login();
    
   }
   

  ngOnInit(): void {
  }

  login(){
    this.dialogRef.closeAll();
    var user=this.loginService.Login(this.user).subscribe(sample=>{
      console.log(sample);
      if(sample==null)
      {
      alert("Invalid Username or Password");
      this.user=new Login();
      //this.router.navigateByUrl("login");
      }
      else{
      var usr=sample as Register;
      if(usr.role=='employee')
      {
      localStorage.setItem("id",JSON.stringify(usr.eId));
      localStorage.setItem("uname",usr.empname);
      localStorage.setItem("email",usr.email);
      localStorage.setItem("role",usr.role);
      localStorage.setItem("region",usr.region);
      localStorage.setItem("mid",JSON.stringify(usr.managerId));
      localStorage.setItem("age",JSON.stringify(usr.age));
      localStorage.setItem("mob",JSON.stringify(usr.mobile));
      localStorage.setItem("dob",JSON.stringify(usr.dob));
      localStorage.setItem("dept",usr.dept);

      this.router.navigateByUrl("employee");
      }
      else if(usr.role=='manager')
      {
        localStorage.setItem("id",JSON.stringify(usr.eId));
        localStorage.setItem("uname",usr.empname);
        localStorage.setItem("email",usr.email);
        localStorage.setItem("role",usr.role);
        localStorage.setItem("region",usr.region);
        localStorage.setItem("mid",JSON.stringify(usr.managerId));
        localStorage.setItem("age",JSON.stringify(usr.age));
        localStorage.setItem("mob",JSON.stringify(usr.mobile));
        localStorage.setItem("dob",JSON.stringify(usr.dob));
        localStorage.setItem("dept",usr.dept);
        this.router.navigateByUrl("manager");
      }
      else if(usr.role=='hr')
      {
        localStorage.setItem("id",JSON.stringify(usr.eId));
        localStorage.setItem("uname",usr.empname);
        localStorage.setItem("email",usr.email);
        localStorage.setItem("role",usr.role);
        localStorage.setItem("region",usr.region);
        localStorage.setItem("mid",JSON.stringify(usr.managerId));
        localStorage.setItem("age",JSON.stringify(usr.age));
        localStorage.setItem("mob",JSON.stringify(usr.mobile));
        localStorage.setItem("dob",JSON.stringify(usr.dob));
        localStorage.setItem("dept",usr.dept);
        this.router.navigateByUrl("hr");
      }
      else if(usr.role=='travel')
      {
        localStorage.setItem("id",JSON.stringify(usr.eId));
        localStorage.setItem("uname",usr.empname);
        localStorage.setItem("email",usr.email);
        localStorage.setItem("role",usr.role);
        localStorage.setItem("region",usr.region);
        localStorage.setItem("mid",JSON.stringify(usr.managerId));
        localStorage.setItem("age",JSON.stringify(usr.age));
        localStorage.setItem("mob",JSON.stringify(usr.mobile));
        localStorage.setItem("dob",JSON.stringify(usr.dob));
        localStorage.setItem("dept",usr.dept);
        this.router.navigateByUrl("travel");
      }
      else{
        localStorage.setItem("id",JSON.stringify(usr.eId));
        localStorage.setItem("uname",usr.empname);
        localStorage.setItem("email",usr.email);
        localStorage.setItem("role",usr.role);
        localStorage.setItem("region",usr.region);
        localStorage.setItem("mid",JSON.stringify(usr.managerId));
        localStorage.setItem("age",JSON.stringify(usr.age));
        localStorage.setItem("mob",JSON.stringify(usr.mobile));
        localStorage.setItem("dob",JSON.stringify(usr.dob));
        localStorage.setItem("dept",usr.dept);
        this.router.navigateByUrl("dept");
      }
    }
    });
    
  }

  reset(){
    this.user=new Login();
  }

}
