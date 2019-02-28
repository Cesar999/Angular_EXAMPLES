import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state/form.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('form-test', reducer)
  ],
  declarations: []
})
export class TestFormModule { }
