// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  onSubmit(email, password) {
    if(this.userService.login(email, password)) {
      console.log("profile");
     }
     
    else{

    console.log("Invalid details");
    }
    console.log("profile_out");
  }
}
