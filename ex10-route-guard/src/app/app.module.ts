import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppPublicComponent } from './app-public/app-public.component';
import { AppSecretComponent } from './app-secret/app-secret.component';
import { DashboardComponent } from './app-public/dashboard/dashboard.component';
import { Child1Component } from './app-public/child1/child1.component';
import { Child2Component } from './app-public/child2/child2.component';

import { AuthGuardService as AuthGuard } from './guards/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'secret', component: AppSecretComponent, canActivate: [AuthGuard] },
  { path: 'public', component: AppPublicComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'child1', component: Child1Component },
          { path: 'child2', component: Child2Component },
          { path: '**', component: DashboardComponent }
        ]
      }
    ]},
  { path: '**', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppPublicComponent,
    AppSecretComponent,
    DashboardComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
