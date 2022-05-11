import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Login } from "../models/login";


@Injectable()

export class LoginService{
    constructor(private httpClient:HttpClient){
    }

    Login(user:Login){
        return this.httpClient.post("http://localhost:50586/api/User/Login",user);
    }

}