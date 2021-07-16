import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string[]=["",""];
  admin:string[]=["",""];
  message:string="";

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  handleSubmit(){
    this.userService.validateUser(this.user).subscribe((response:any)=>{
    if(response.length==0){
      this.message="User not found";
    }else{
      this.message="Login Successful";
      this.router.navigate(['bloodbank']);
    }
  });
  }

  handleAdmin(){
    this.userService.validateAdmin(this.admin).subscribe((response:any)=>{
      if(response.length==0){
        this.message="User not found";
      }else{
        this.message="Admin Login Successful";
        this.router.navigate(['admin']);
      }
    });
  }

}
