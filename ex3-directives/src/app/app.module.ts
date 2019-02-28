import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnlessDirective } from './unless.directive';
import { AppHighlightDirective } from './app-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    AppHighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
