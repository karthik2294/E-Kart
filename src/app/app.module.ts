import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeesComponent } from './employees/employees.component';


const appRoutes: Routes =  [{ path: 'home', component: HomeComponent },
                            { path: 'employees', component: EmployeesComponent },
                            { path: '', redirectTo: '/home', pathMatch: 'full' },
                            { path: '**', component: PagenotfoundComponent }];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
