import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderByPipe } from '../orderBy/orderBy'

import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { SharedDataService } from '../../shared/service/shared-data.service';
import { TableComponent } from './table.component';


describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent, OrderByPipe],
      imports: [RouterTestingModule, FormsModule],
      providers: [SharedDataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;

    component.items = [];

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to a given page when clicked', () => {

  });

  it('should store id as provided', () => {

  });

  it('should be titled appropriately', () => {
    
  });
});
