import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UserAuthModule} from './MyModule/user-auth/user-auth.module';
import { HeaderModuleModule } from './MyModule/header-module/header-module.module';
import { IndexModuleModule } from './MyModule/index-module/index-module.module';
import { FormsModule } from '@angular/forms';
import { MainModuleServiceService } from './MyModule/main-module-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserAuthModule,
    HeaderModuleModule,
    IndexModuleModule,
    HttpClientModule
  ],
  providers: [MainModuleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
