import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Msg1Component } from './msg1/msg1.component';
import { Msg2Component } from './msg2/msg2.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'msg1', component: Msg1Component},
  { path: 'msg2', component: Msg2Component},
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Msg1Component,
    Msg2Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

