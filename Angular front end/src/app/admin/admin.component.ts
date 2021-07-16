import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  bloodrequests:Object[]=[];
  blooddonations:Object[]=[];
  stock:Object[]=[];
  statusCheck:Object[]=[];

  statusUpdate:any=[];
  
  activeid:number=0;

  req:boolean=false;
  don:boolean=false;
  stk:boolean=false;

  acceptreq:boolean=false;
  rejectreq:boolean=false;


  constructor(private userService:UserService,private router:Router) {
    this.userService.getStatus().subscribe((response:any)=>{this.statusCheck=response;console.log(response)}); 
   }

  public ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  

  handlebloodrequests(){
    console.log(this.statusCheck);
    this.req=true;
    this.don=false;
    this.stk=false;
    this.userService.getBloodRequests().subscribe((response:any)=>{this.bloodrequests=response;console.log(this.bloodrequests);});
  }

  handleblooddonations(){
    this.req=false;
    this.don=true;
    this.stk=false;
    this.userService.getBloodDonations().subscribe((response:any)=>{this.blooddonations=response;console.log(this.blooddonations);});
    
  }

  getButtonText(id:number){
    let buttonText;
    id <= this.activeid  ? buttonText= "Accepted" : buttonText = "Accept";
    return buttonText;
  }

  

  handleAccept(request:any,event:any){
    
    this.activeid=request.reqid;
    this.statusUpdate=[];
    this.statusUpdate.push(request);
    this.statusUpdate.push(event.target.value);
    this.userService.setStatus(this.statusUpdate).subscribe((response)=>{console.log(response);this.ngOnInit()});
    // console.log(this.statusCheck);
    // this.userService.getStatus().subscribe((response:any)=>{this.statusCheck=response;console.log(response);}); 
  }

  handleStock(){
    this.req=false;
    this.don=false;
    this.stk=true;
    this.userService.getStock().subscribe((response:any)=>{this.stock=response;console.log(this.stock)});
  }



}
