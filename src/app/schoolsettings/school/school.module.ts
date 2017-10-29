import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from "@angular/router";
import {SchoolRouterModule,routedComponents} from './school-routing-module';
import {SchoolComponent} from './school-component';
import { ClassSettingComponent } from './class-setting/class-setting.component';
import { SubjectSettingComponent } from './subject-setting/subject-setting.component';
import { AccademicYearComponent } from './accademic-year/accademic-year.component';
import { SemisterSettingComponent } from './semister-setting/semister-setting.component';
import { PaymentSettingComponent } from './payment-setting/payment-setting.component'
import { HttpModule } from "@angular/http";
import {SchoolProfileComponent} from './school-profile/school-profile.component'
import { FormsModule } from '@angular/forms';
import { SchoolProfileService } from '../../Services/SchoolProfileService';
import { SchoolsComponent } from './school-profile/schools/schools.component';
import { TableComponent } from '../../shared/table/table.component';
import { OrderByPipe } from '../../shared/orderBy/OrderByPipe';
import { ImageUploadModule } from "angular2-image-upload";
import { SafeHtml } from '../../shared/orderBy/safeHtml';
import { UploadPhotoService } from '../../Services/file-uploadService';
import { DatatableComponent } from '../../schoolsettings/datatable/datatable.component';
import { DataTableModule } from 'angular-4-data-table';
import { SchoolResolver } from './school-profile/schools/school-resolver';
import { SchoolService } from './school-profile/schools/school-service';

@NgModule({
  imports: [
    CommonModule,
    SchoolRouterModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ImageUploadModule.forRoot(),
    DataTableModule

  ],
  declarations: [
    SchoolComponent,
    routedComponents,
    ClassSettingComponent,
    SubjectSettingComponent,
    AccademicYearComponent,
    SemisterSettingComponent,
    PaymentSettingComponent,
    SchoolProfileComponent,
    SchoolsComponent,
    TableComponent,
    OrderByPipe,
    DatatableComponent,
    SafeHtml

  ],
providers: [
   SchoolService,
   UploadPhotoService,
   SchoolResolver
  ]

})
export class SchoolModule { }
