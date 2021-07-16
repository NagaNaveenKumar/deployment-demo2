import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import {User} from "./user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User=new User("","","","");

  constructor(private userService:UserService,private router:Router) { 
  }

  ngOnInit(): void {
  }

  radioChangeHandler(event:any){
    this.user.gender=event.target.value;
  }

  handleSubmit(){
    console.log(this.user);
    this.userService.registerUser(this.user).subscribe((response)=>console.log(response));
    this.router.navigate(['login']);
  }

}
