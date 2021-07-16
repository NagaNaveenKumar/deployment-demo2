import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bloodbank',
  templateUrl: './bloodbank.component.html',
  styleUrls: ['./bloodbank.component.css']
})
export class BloodbankComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToBloodRequest(){
    this.router.navigate(['bloodrequest']);
  }

  navigateToBloodDonate(){
    this.router.navigate(['blooddonate']);
  }

}
