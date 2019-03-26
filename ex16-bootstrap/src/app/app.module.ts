import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { MyPaginationComponent } from './my-pagination/my-pagination.component';

const appRoutes: Routes = [
  { path: '', component: MyPaginationComponent },
  { path: '**', component: MyPaginationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyPaginationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
