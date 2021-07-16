import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Blooddonate } from './blooddonate.model';

@Component({
  selector: 'app-blooddonate',
  templateUrl: './blooddonate.component.html',
  styleUrls: ['./blooddonate.component.css']
})
export class BlooddonateComponent implements OnInit {

  blooddonate:Blooddonate=new Blooddonate("","","",0);

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  radioChangeHandler(event:any){
    this.blooddonate.bloodgroup=event.target.value;
  }

  handleSubmit(){
    this.blooddonate.units=Number(this.blooddonate.units);
    console.log(this.blooddonate);
    this.userService.donateBlood(this.blooddonate).subscribe((response)=>console.log(response));
    this.router.navigate(['bloodbank']);
  }

}
