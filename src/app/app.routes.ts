import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './user/home/home.component';
import { StyleguideComponent } from './shared/styleguide/styleguide.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterFinalComponent } from './auth/register-final/register-final.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path:'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'styleguide', component: StyleguideComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'register-final', component: RegisterFinalComponent}
];
