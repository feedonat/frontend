import { Component, OnInit, ViewChild } from '@angular/core';
import { SchoolProfileService } from '../../../../Services/SchoolProfileService';
import { SchoolProfile } from '../../../../Models/Models';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent {
  public nn:any[];
  public schoolCount = 0;
  public cols: any[] = [

  { "property": "id", "header": "ID", "sortable": true },
  { "property": "schoolName", "header": "School Name", "sortable": true },
  { "property": "address", "header": "Address", "sortable": true },
  { "property": "email", "header": "email", "sortable": true },
  { "property": "phone", "header": "phone#", "sortable": true },
  { "property": "mobile", "header": "mobile", "sortable": true },
  { "property": "logo", "header": "Logo", "sortable": false },

];
 


  constructor(public schoolprofileService: SchoolProfileService) {
  }
  // special params:
  translations = <DataTableTranslations>{
    indexColumn: 'Index column',
    expandColumn: 'Expand column',
    selectColumn: 'Select column',
    paginationLimit: 'Max results',
    paginationRange: 'Result range'
  };

  carClicked(item) {
    console.log(item)
  }

  ngOnInit() {
    this.getall();

  }
  getall() {
    this.schoolprofileService.getall().subscribe(schools => this.schoolsData = schools,
      error => {
        Observable.throw(error);
      });

    console.log(this.schoolsData)
  }
}