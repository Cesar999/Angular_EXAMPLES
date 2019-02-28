import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  num1 = 0;
  num2 = 0;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select('applicationState')
    .subscribe(
      state => {
        if (state) {
          this.num1 = state.from1_num1;
          this.num2 = state.from1_num2;
        }
      });
  }

  num1Changed() {
    this.store.dispatch({
      type: 'FORM1_NUM1',
      payload: this.num1
    });
  }

  num2Changed() {
    this.store.dispatch({
      type: 'FORM1_NUM2',
      payload: this.num2
    });
  }


  increaseNum1() {
    this.num1++;
    this.num1Changed();
  }

  decreaseNum1() {
    this.num1--;
    this.num1Changed();
  }

  increaseNum2() {
    this.num2++;
    this.num2Changed();
  }

  decreaseNum2() {
    this.num2--;
    this.num2Changed();
  }


}
