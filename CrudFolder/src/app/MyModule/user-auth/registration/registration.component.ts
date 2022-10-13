import { Component, OnInit } from '@angular/core';
import { MainModuleServiceService } from '../../main-module-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private serviceData:MainModuleServiceService) { }

  ngOnInit(): void {
  }
  saveData(Data:any)
  {
   
    console.log(this.serviceData.getRecords());
  }
}
