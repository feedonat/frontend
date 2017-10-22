import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchoolComponent} from './schoolsettings/school/school-component';
import {AppComponent} from './app.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { SchoolsComponent } from './schoolsettings/school/school-profile/schools/schools.component';
import { DatatableComponent } from './shared/datatable/datatable.component';

const routes: Routes = [
  
    { path: '', component: WelcomeComponent },
    //{ path: 'school', loadChildren : 'app/schoolsettings/school/school.module#SchoolModule'}
     { path: 'school', component : SchoolsComponent},
     { path: 'datatable', component : DatatableComponent}

  // { path: '', component: SchoolProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRouting { }
