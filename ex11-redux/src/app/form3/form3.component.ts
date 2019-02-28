import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {
  techs = ['HTML', 'CSS', 'JavaScript', 'Node', 'Angular', 'Docker'];
  selectedTech = this.techs[0]

  levels = ['Beginner', 'Medium', 'Advance', 'Pro'];
  selectedLevel = this.levels[0];
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select('applicationState')
    .subscribe(
      state => {
        if (state) {
          this.selectedTech = state.from3_tech;
          this.selectedLevel = state.from3_level;
        }
      });
  }

  changeTech(e) {
    this.selectedTech = e;
    this.techChanged();
  }

  changeLevel(e) {
    this.selectedLevel = e;
    this.levelChanged();
  }

  techChanged() {
    this.store.dispatch({
      type: 'FORM3_TECH',
      payload: this.selectedTech
    });
  }

  levelChanged() {
    this.store.dispatch({
      type: 'FORM3_LEVEL',
      payload: this.selectedLevel
    });
  }
}
