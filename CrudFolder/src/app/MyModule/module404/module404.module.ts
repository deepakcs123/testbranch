import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component404Component } from './component404/component404.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    Component404Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule
  ],
  exports:[
    Component404Component
  ]
})
export class Module404Module { }
