import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'school-root',
  template: `
    
    <router-outlet></router-outlet>
  `
})
export class SchoolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
