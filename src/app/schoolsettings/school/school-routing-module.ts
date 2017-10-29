import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchoolComponent} from './school-component';
import {SchoolProfileComponent} from './school-profile/school-profile.component';
import { ClassSettingComponent } from './class-setting/class-setting.component';
import { SubjectSettingComponent } from './subject-setting/subject-setting.component';
import { AccademicYearComponent } from './accademic-year/accademic-year.component';
import { SemisterSettingComponent } from './semister-setting/semister-setting.component';
import { PaymentSettingComponent } from './payment-setting/payment-setting.component'
import { SchoolsComponent } from './school-profile/schools/schools.component';
import { DatatableComponent } from '../datatable/datatable.component';
import { SchoolResolver } from './school-profile/schools/school-resolver';

const routes :Routes=[
    
   { path: 'school/schools', component: SchoolsComponent,resolve: {schools:SchoolResolver} },
   { path: 'school/schools/new', component: SchoolProfileComponent},
   {path: '', pathMatch: 'full', redirectTo: 'schools' },
   { path: 'school/schools/:id', component: SchoolProfileComponent},
   
  
   
      { path: 'school/class', component: ClassSettingComponent },
      { path: 'school/subject', component: SubjectSettingComponent },
      { path: 'school/year', component: AccademicYearComponent },
      { path: 'school/semister', component: SemisterSettingComponent },
      { path: 'school/paymentsetting', component: PaymentSettingComponent },
      { path: 'school/datatable', component: DatatableComponent }
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRouterModule { }

export const routedComponents = [
  SchoolProfileComponent,
  SemisterSettingComponent,
  ClassSettingComponent,
  SubjectSettingComponent,
  PaymentSettingComponent,
  AccademicYearComponent
];

