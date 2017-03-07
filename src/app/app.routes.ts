// app.routes.ts
import { LoggedInGuard } from './logged-in.guard';
import { UserGuard } from './user.guard';


import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import {IntegrationSetupComponent } from './IntegrationSetup.component';

export const routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [LoggedInGuard] },
  { path: 'lmsSetup', component: IntegrationSetupComponent, canActivate: [LoggedInGuard] }
];
