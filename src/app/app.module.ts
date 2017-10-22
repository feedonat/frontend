import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import {SchoolModule} from './schoolsettings/school/school.module';
import { AppRouting } from './app-routing';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import {Router, RouterModule} from "@angular/router";
import { FooterComponent } from './shared/footer/footer.component';
import { DataTableModule } from 'angular-2-data-table';
import { DatatableComponent } from './shared/datatable/datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    FooterComponent,
    DatatableComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    AppRouting,
    SchoolModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
