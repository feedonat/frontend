import { Component, OnInit, ViewChild } from '@angular/core';
import { SchoolProfile } from '../../../../Models/Models';
import { Observable } from 'rxjs/Observable';
import { Router,ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-4-data-table';
import { SchoolService } from './school-service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent {
   
  schoolResource = new DataTableResource(this.route.snapshot.data['schools']);
  schools = [];
  dataCount = 0;

  @ViewChild(DataTable) schoolTable;
cols=[
  { "property": "id", "header": "ID", "sortable": true },
  { "property": "schoolName", "header": "School Name", "sortable": true ,"resize":true},
  { "property": "address", "header": "Address", "sortable": true,"resize":true },
  { "property": "email", "header": "email", "sortable": true },
  { "property": "phone", "header": "phone#", "sortable": true },
  { "property": "mobile", "header": "mobile", "sortable": true },
  { "property": "logo", "header": "Logo", "sortable": false },

];
 
  constructor(private route:ActivatedRoute,private myroute:Router) {
    
    this.schoolResource.count().then(count => this.dataCount = count);
}

reloadFilms(params) {
    this.schoolResource.query(params).then(schools => this.schools = schools);
}

cellColor(car) {
    return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7)/1.3)*100)) + ')';
};

// special params:
translations = <DataTableTranslations>{
    indexColumn: 'Index column',
    expandColumn: 'Expand column',
    selectColumn: 'Select column',
    paginationLimit: 'Max results',
    paginationRange: 'Result range'
};


schoolCliked(school) {
  alert(JSON.stringify(school));
}

yearLimit = 1999;

rowColors(car) {
  if (car.year >= this.yearLimit) return 'rgb(255, 255, 197)';
}
addNew(){
  this.myroute.navigateByUrl("school/schools/add");
}
}