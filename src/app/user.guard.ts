// user.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private user: UserService, private router: Router) {}

  canActivate() {
    
      return true;
  }
}
