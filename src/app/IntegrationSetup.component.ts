
import { Component  ,  OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import {HomeComponent } from './home.component';
import { Http, Headers } from '@angular/http';
 import {consumer} from  './consumer' ;
 import {provider} from  './provider' ;


@Component({
  selector: 'IntegrationSetup',
  templateUrl: './IntegrationSetup.component.html',
   styleUrls: ['./IntegrationSetup.component.css']
})
export class IntegrationSetupComponent implements OnInit {
    
    installationId: string ; 
     consumerTypeList: consumer[];
     providerList : provider[];
     flag : boolean ;


   ngOnInit(): void{
        this.getAllLists();
        this.flag= false;

   }
	
  constructor(private user: UserService  , private http :Http ) {}

  
  hasRole(role_name){

  return this.user.roles.indexOf(role_name) > 0;
  }


  getAllLists(){

     console.log("Extracting Lists");


     return this.http
      .get('mghmiddleware/rest/lmsinstallationsetup/setupproviderconfig.json')
      .subscribe((res) => {
      	console.log("This is response from res:"+res._body);

      let a = JSON.parse(res._body);

      	console.log("This is response from a:"+JSON.parse(res._body).consumerTypeList);
        this.consumerTypeList=JSON.parse(res._body).consumerTypeList;
        this.providerList= JSON.parse(res._body).providerList;
        return res.success;
      });


  }


  getSchoolInfo(){

     let headers = new Headers();
      headers.append('Content-Type', 'application/json');
       console.log("Extracting school Info");
      



     return this.http
      .post(
        'mghmiddleware/rest/lmsinstallationsetup/getSchoolInfo.json',
        JSON.stringify({installationId: this.installationId }),
        { headers }
      )
      .subscribe((res) => {
      	

      	console.log("This is response from res:"+res._body);
      let a = JSON.parse(res._body);

      if(res.status === 200){

      	this.flag=true;

      }

      console.log("This is the value of flag" + this.flag);

      	/*console.log("This is response from a:"+JSON.parse(res._body));*/
        /*this.consumerTypeList=JSON.parse(res._body).consumerTypeList;
        this.providerList= JSON.parse(res._body).providerList;*/

        return res.success;
      });

     

  }


}