import { Component, OnInit } from '@angular/core';
import { MainModuleServiceService } from '../../main-module-service.service';

@Component({
  selector: 'app-index-component',
  templateUrl: './index-component.component.html',
  styleUrls: ['./index-component.component.css']
})
export class IndexComponentComponent implements OnInit {

  constructor(private serviceData:MainModuleServiceService ) { }

  ngOnInit(): void {
    console.log(this.serviceData.apiUrl);
    console.warn(this.serviceData.getRecords);
  }

}
