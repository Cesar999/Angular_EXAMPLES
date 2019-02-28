import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { StoreModule } from '@ngrx/store';
import { generalReducer } from './state/general.reducer';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form1', component:  Form1Component },
  { path: 'form2', component:  Form2Component },
  { path: 'form3', component:  Form3Component },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({applicationState: generalReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
