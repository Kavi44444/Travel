import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Register } from "../models/register";



@Injectable()
export class RegisterService{
    constructor(private http:HttpClient){

    }
    addUsers(register:Register){
       return this.http.post("http://localhost:50586/api/User/Register",register);
    }

}