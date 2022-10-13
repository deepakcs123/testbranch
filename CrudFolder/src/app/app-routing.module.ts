import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponentComponent } from './MyModule/index-module/index-component/index-component.component';
import { Component404Component } from './MyModule/module404/component404/component404.component';
import { LoginComponent } from './MyModule/user-auth/login/login.component';
import { RegistrationComponent } from './MyModule/user-auth/registration/registration.component';

const routes: Routes = [
  {
    path:"",
    component:IndexComponentComponent,
    pathMatch:"full",
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"signup",
    component:RegistrationComponent,
    pathMatch:"full"
  },
  {
    path:"**",
    component:Component404Component,
    pathMatch:"full"
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
