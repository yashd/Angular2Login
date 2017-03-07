import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { UserComponent } from './user.component';
import { LoginComponent } from './login.component';
import {IntegrationSetupComponent } from './IntegrationSetup.component';
import { routes } from './app.routes';
import { UserService } from './user.service';

import { LoggedInGuard } from './logged-in.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    IntegrationSetupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
