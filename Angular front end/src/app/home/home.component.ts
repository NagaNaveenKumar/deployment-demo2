import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  @Output() public messageToParent:EventEmitter<boolean>=new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  navigateToRegister(){
    this.router.navigate(['register']);
    this.messageToParent.emit(false);
  }

  navigateToLogin(){
    this.router.navigate(['login']);
    this.messageToParent.emit(false);
  }

}
