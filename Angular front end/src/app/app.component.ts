import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BloodBank';
  toggle:boolean=true;

  constructor(private router:Router){

  }

  updateToggle(toggle:any){
    this.toggle=toggle;
    console.log(toggle);
  }

  
}
