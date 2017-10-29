import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-4-data-table';
import { films } from './data';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {

  @Input()  resource:any[]
  @Input()  cols:any[];
  @Input()  filmResource = new DataTableResource(this.resource);
  resourceList = [];
  count = 0;

  @ViewChild(DataTable) filmsTable;

  constructor() {
      console.log(this.resource);
      this.filmResource.count().then(count => this.count = count);
  }

  reloadFilms(params) {
      this.filmResource.query(params).then(films => this.resourceList = films);
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

}
