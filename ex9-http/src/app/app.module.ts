import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubjectComponent } from './subject/subject.component';

import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import {ReactiveFormsModule} from '@angular/forms';
import { MainComponent } from './main/main.component';


const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'subject/:id/:name/:subject/:grade', component: SubjectComponent },
  { path: 'subject', component: SubjectComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
