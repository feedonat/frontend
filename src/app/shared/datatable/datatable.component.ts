import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-4-data-table';
// import { films } from './datatable-data';
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})

export class DatatableComponent {

//   filmResource = new DataTableResource(films);
//   films = [];
//   filmCount = 0;

 
  @Input() items:any[];
  @Input() cols:any[];
  @Input() itemCount:number;
 // (reload)="reloadFilms($event)"
 @Input() limit:number=5;
 @Input() sortBy:string;
 @Input()selectColumn:boolean=true;
 @Input() multiSelect:boolean = true;
 @Input() indexColumn:boolean=true;
 //@Input() translations="translations";

 filmResource = new DataTableResource(this.items);

 @ViewChild(DataTable) dataTable;

  constructor() {
      this.filmResource.count().then(count => this.itemCount = count);
  }

  reloadFilms(params) {
      this.filmResource.query(params).then(films => this.items = films);
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

  carClicked(item){
      console.log(item)
  }

}
