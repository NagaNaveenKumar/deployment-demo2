import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BloodbankComponent } from './bloodbank/bloodbank.component';
import { BlooddonateComponent } from './blooddonate/blooddonate.component';
import { BloodrequestComponent } from './bloodrequest/bloodrequest.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Route[]= [
  {path:'home',component:HomeComponent,pathMatch:'full'},
  {path:'register',component:UserComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'bloodbank',component:BloodbankComponent,pathMatch:'full'},
  {path:'blooddonate',component:BlooddonateComponent,pathMatch:'full'},
  {path:'bloodrequest',component:BloodrequestComponent,pathMatch:'full'},
  {path:'admin',component:AdminComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
}
