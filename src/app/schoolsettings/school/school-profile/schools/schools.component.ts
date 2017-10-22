import { Component, OnInit, ViewChild } from '@angular/core';
import { SchoolProfileService, schoolsData } from '../../../../Services/SchoolProfileService';
import { SchoolProfile } from '../../../../Models/Models';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-2-data-table';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent {

  schoolResource = new DataTableResource(schoolsData);
  schoolsData = [];
  schoolCount = 0;


  @ViewChild(DataTable) schoolTable;

  constructor(public schoolprofileService: SchoolProfileService) {

    this.getall();
    this.schoolResource.count().then(count => this.schoolCount = count);
  }

  reloadFilms(params) {



    this.schoolResource.query(params).then(films => this.schoolsData = films);
  }

  cellColor(car) {
    return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7) / 1.3) * 100)) + ')';
  };

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
    this.schoolprofileService.getSchools().subscribe(schools => this.schoolsData = schools,
      error => {
        Observable.throw(error);
      });
    console.log(this.schoolsData)
    console.log(schoolsData)
  }
  schoolClicked(school) {
    alert(school);
  }
  
}