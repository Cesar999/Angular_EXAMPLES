import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TestFormComponent } from './test-form/test-form.component';
import { HomeComponent } from './home/home.component';
import { TestFormModule } from './test-form/test-form.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'testform', component: TestFormComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'App DevTools',
      logOnly: environment.production
    }),
    TestFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
