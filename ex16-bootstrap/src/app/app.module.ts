import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { MyPaginationComponent } from './my-pagination/my-pagination.component';
import { MyCarouselComponent } from './my-carousel/my-carousel.component';
import { MyDropdownComponent } from './my-dropdown/my-dropdown.component';

const appRoutes: Routes = [
  { path: '', component: MyPaginationComponent },
  { path: 'pagination', component: MyPaginationComponent },
  { path: 'carousel', component: MyCarouselComponent },
  { path: 'dropdown', component: MyDropdownComponent },
  { path: '**', component: MyPaginationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyPaginationComponent,
    MyCarouselComponent,
    MyDropdownComponent
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
