import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OrderByPipe } from '../orderBy/OrderByPipe';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor(private router: Router,private _sanitizer: DomSanitizer) { }
  // each col should contain 'id' (name of corresponding item property), (display) 'name', 'selectBox' (bool), 'button' (bool)
  @Input() public cols: any[];
  //Optionally, items can have 'Link' appended to regular property names to have corresponding links on the fields (i.e. claim.claimIdLink='/institutionalClaims')
  @Input() public items: any[];
  
  public filterText:string;
  public filterdItems: any[]=[];

  @Input() public tableOptions: any[] = [];
  @Input() public numPerPageOptions: any[] = [5,10, 25, 50, 100, 'All'];
  public numPerPage: number;
  public pageNum: number = 0;
  public sort: string = "";
  public asc: boolean = true;
  ngOnInit() {
    this.numPerPage = this.numPerPageOptions[0];
     console.log(this.cols);
  }
  sortCol() {
    if (OrderByPipe.sort != (event.target as Element).id) {
      OrderByPipe.sort = (event.target as Element).id;
      OrderByPipe.asc = false;
    }
    else
      OrderByPipe.asc = !OrderByPipe.asc;
    this.sort = OrderByPipe.sort;
    OrderByPipe.asc;
    //used to trigger angular update
    this.items = this.items.concat([]);
   
     

  }


  onClickColCheckMark(event) {
    this.items.forEach(item => item.selected = event.target.checked);
    console.log(this.items);
  }


//filter to be done some other time
// filter(input:string){
//   console.log(input);
//       this.filterdItems = [];
//       if(input != ""){
//             this.items.forEach(element => {
//                 if( element.toString().toUpperCase().indexOf(input.toUpperCase())>=0){
//                   this.filterdItems.push(element);
//                   console.log(this.filterdItems);
//                }
//             });
//       }else{
//          this.filterdItems = this.items;
//       }
//       console.log(this.filterdItems);
//       this.ngOnInit();
//    }


  //navigates to the page (0-n)
  page(i: number) {
    //if a valid page number, else go to either first or last page
    if (i >= 0 && i <= Math.floor((this.items.length - 1) / this.numPerPage))
      this.pageNum = i;
    else if (i < 0)
      this.pageNum = 0;
    else this.pageNum = Math.floor((this.items.length - 1) / this.numPerPage)
  }
}
