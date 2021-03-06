import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalComponent } from './approval/approval.component';
import { DeptComponent } from './dept/dept.component';
import { EmployeeComponent } from './employee/employee.component';
import { HrComponent } from './hr/hr.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RequestComponent } from './request/request.component';
import { TravelComponent } from './travel/travel.component';
import { ViewsComponent } from './views/views.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'',component:MenuComponent},
  {path:'profile',component:ProfileComponent},
  {path:'hr',component:HrComponent},
  {path:'travel',component:TravelComponent},
  {path:'manager',component:ManagerComponent},
  {path:'dept',component:DeptComponent},
  {path:'views',component:ViewsComponent},
  {path:'request',component:RequestComponent},
  {path:'approval',component:ApprovalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
