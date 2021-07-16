import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { User } from './user/user.model';
import { Bloodrequest } from './bloodrequest/bloodrequest.model';
import { Blooddonate } from './blooddonate/blooddonate.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  registerUser(user:User){
    return this.http.post("http://localhost:8084/user",user,{responseType:'text' as 'json'});
  }

  validateUser(user:string[]){
    let params = new HttpParams().set("username",user[0]).set("password", user[1]);
    return this.http.get("http://localhost:8084/login",{params:params});
  }

  validateAdmin(admin:string[]){
    let params = new HttpParams().set("username",admin[0]).set("password", admin[1]);
    return this.http.get("http://localhost:8084/adminlogin",{params:params});
  }

  requestBlood(bloodrequest:Bloodrequest){
    return this.http.post("http://localhost:8084/user/request",bloodrequest,{responseType:'text' as 'json'});
  }

  

  donateBlood(blooddonate:Blooddonate){
    return this.http.post("http://localhost:8084/user/donate",blooddonate,{responseType:'text' as 'json'});
  }

  getBloodRequests(){
    return this.http.get("http://localhost:8084/requests");
  }

  getBloodDonations(){
    return this.http.get("http://localhost:8084/donations");
  }

  getStock(){
    return this.http.get("http://localhost:8084/bloodunits");
  }

  getStatus(){
    return this.http.get("http://localhost:8084/status");
  }

  setStatus(statusUpdate:any){
    return this.http.post("http://localhost:8084/user/accept",statusUpdate,{responseType:'text' as 'json'});
  }

}
