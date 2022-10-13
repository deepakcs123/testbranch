import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponentComponent } from './index-component/index-component.component';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MainModuleServiceService } from '../main-module-service.service';

@NgModule({
  declarations: [
    IndexComponentComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ],
  exports:[
    IndexComponentComponent
  ]
})
export class IndexModuleModule {
 }
