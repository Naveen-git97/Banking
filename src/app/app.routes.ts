import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ApplicationInitStatus } from '@angular/core';
import { ApplicationComponent } from './application/application.component';
import { LoanComponent } from './loan/loan.component';
import path from 'path';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [ 
    {
        path:"",
        redirectTo:"home",
        pathMatch:"full"

    },
    {
    path:"home",
    component:HomeComponent
    },

    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"application",
        component:ApplicationComponent

    },
    {
        path:"loan",
        component:LoanComponent,
    },
];
