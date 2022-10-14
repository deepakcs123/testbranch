import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import {MatSelectModule} from '@angular/material/select';
import { MainModuleServiceService } from '../main-module-service.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    MatSelectModule
  ],
  exports:[
    LoginComponent,
   
  ]
})
export class UserAuthModule { }
