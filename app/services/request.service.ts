import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Request } from "../models/request";


@Injectable()

export class RequestService{
    
    constructor(private httpClient:HttpClient){
    }

    ManagerRequest(request:Request){
        return this.httpClient.put("http://localhost:50586/api/Request/Manager",request);
    }

    
    DepartRequest(request:Request){
        return this.httpClient.put("http://localhost:50586/api/Request/DepartmentHead",request);
    }

    
    FacilityRequest(request:Request){
        return this.httpClient.post("http://localhost:54465/api/Request/Facility",request);
    }

    
    EmployeeRequest(request:Request){
        return this.httpClient.post("http://localhost:50586/api/Request/Employee",request);
    }

    getAllManager(){
        return this.httpClient.get("http://localhost:50586/api/Request/GetAll_Manager");
    }

    
    getAllHead(){
        return this.httpClient.get("http://localhost:50586/api/Request/GetAll_Head");
    }

    
    getAllFacility(){
        return this.httpClient.get("http://localhost:54465/api/Request/GetAll_Facility");
    }

    
    getAllEmployee(){
        return this.httpClient.get("http://localhost:50586/api/Request/GetAll_Travel");
    }
    getSingleEmployee(request:Request):Observable<Request[]>{
        return this.httpClient.post<Request[]>("http://localhost:50586/api/Request/GetEmployeeById",request);
    }
}