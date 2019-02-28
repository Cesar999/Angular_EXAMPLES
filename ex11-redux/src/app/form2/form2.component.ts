import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  username = ``;
  password = ``;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select('applicationState')
    .subscribe(
      state => {
        if (state) {
          this.username = state.from2_text1;
          this.password = state.from2_text2;
        }
      });
  }

  updateUsername(event: Event){
    this.username = (<HTMLInputElement>event.target).value;
    this.usernameChanged();
  }

  updatePassword(event: Event){
    this.password = (<HTMLInputElement>event.target).value;
    this.passwordChanged();
  }

  usernameChanged() {
    this.store.dispatch({
      type: 'FORM2_TEXT1',
      payload: this.username
    });
  }

  passwordChanged() {
    this.store.dispatch({
      type: 'FORM2_TEXT2',
      payload: this.password
    });
  }
}
