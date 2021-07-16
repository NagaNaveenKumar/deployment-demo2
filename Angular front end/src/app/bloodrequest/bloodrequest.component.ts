import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { __await } from 'tslib';
import { UserService } from '../user.service';
import { Bloodrequest } from './bloodrequest.model';

@Component({
  selector: 'app-bloodrequest',
  templateUrl: './bloodrequest.component.html',
  styleUrls: ['./bloodrequest.component.css']
})
export class BloodrequestComponent implements OnInit {

  bloodrequest:Bloodrequest=new Bloodrequest("","","",0);


  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  radioChangeHandler(event:any){
    this.bloodrequest.bloodgroup=event.target.value;
  }

   handleSubmit(){
    this.bloodrequest.units=Number(this.bloodrequest.units);
    console.log(this.bloodrequest);
    this.userService.requestBlood(this.bloodrequest).subscribe(async (response:any)=>{console.log(response)});
    this.router.navigate(['bloodbank']);
  }

  

  

}
