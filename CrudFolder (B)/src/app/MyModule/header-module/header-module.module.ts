import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './header-component/header-component.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    HeaderComponentComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,

  ],
  exports:[
    HeaderComponentComponent
  ]
})
export class HeaderModuleModule {
  
 }
