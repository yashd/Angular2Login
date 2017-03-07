
import { Component  , OnInit } from '@angular/core';

import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'homePage',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

   

  constructor(private user: UserService,  private router: Router) {}

 ngOnInit() : void {
     console.log("started");
    this.user.getRoles();
    console.log("Done");
    
 }


 contains(role_name) : boolean {
 
    
   return this.user.roles.indexOf(role_name) > 0;

 }


 LmsSetup(){
     
     this.router.navigate(['/lmsSetup']);


 }






}
