import { Component, OnInit } from '@angular/core';
import { SchoolProfileService } from '../../../../Services/SchoolProfileService';
import { SchoolProfile } from '../../../../Models/Models';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  public schools: any[]=[];
  public cols: any[] = [{ "name": "Select?", "id": "select", "selectBox": true }, { "name": "school id", "id": "id"},
  { "name": "School Name", "id": "schoolName"},
  { "name": "Address", "id": "address"},
  { "name": "Email", "id": "email"},
  { "name": "Phone", "id": "phone"},
  { "name": "Mobile", "id": "mobile"},
  {"name":"logo", "id":"logo","sort":false,"image":true},
  {"name":"Action", "id":"action","sort":false, "button":true}
 ];
  constructor(public schoolService: SchoolProfileService, public router: Router) {
  }
  ngOnInit() {

    this.schoolService.getSchools().subscribe(schools => this.schools = schools,
      error => {
        Observable.throw(error);
      });
    console.log(this.schools)
  }

}