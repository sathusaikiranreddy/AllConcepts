import {  NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { Login } from './features/login/login.component';
import { LoginService } from './features/login/login.service';
import { AppMaterialModule } from './app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './features/counterNgrx/counterReducer';


@NgModule({
  declarations: [  
    AppComponent,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    DashboardModule,
    // this is the way to add reducer here counter is name given to access in component and counterReducer is 
    // function that return reducers functions. u can add another reducer like 
    // {counter : counterReducer, post : postReducer}
    StoreModule.forRoot({counter : counterReducer})
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})

export class AppModule { }
