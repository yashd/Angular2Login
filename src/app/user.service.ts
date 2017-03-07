// user.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';


@Injectable()
export class UserService {
    private loggedIn = false;
  
    roles: string[];


  constructor(private http:Http , private router: Router ) {
    
    this.roles= [];
  }


  login(userName, password) {
   
   
    console.log("reached");
     
   
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');


    return this.http
      .post(
        'url',
        JSON.stringify({ userName, password }),
        { headers }
      )
      .subscribe((res) => {

      	
      	
      	let a = JSON.parse(res._body);
          console.log("middle");
     
        
        if (a.valid) {
         localStorage.setItem('userId', a.userId);
          this.loggedIn = true;
        }
        
        this.router.navigate(['/home']);
        return this.loggedIn;
      });

  }


   getRoles(){

         console.log("roles");
        let id=localStorage.getItem('userId');
        
       let headers = new Headers();
        headers.append('Content-Type', 'application/json');

    
    return this.http
      .get(
        'url',
        { headers }
      )
      .subscribe((res) => {
      	

      	console.log("This is response from res:"+res._body);
      	
      	
      	let a = JSON.parse(res._body);

      	console.log("This is response from a:"+a.roles);
       
       this.roles=a.roles; 
        console.log("list:"+this.roles);
        return res.success;
      });

   }
  logout() {
    localStorage.removeItem('userId');
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
  	console.log("Is logged in "+this.loggedIn);
    return this.loggedIn;
  }

}
