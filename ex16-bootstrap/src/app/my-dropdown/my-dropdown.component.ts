import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {
  items = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit() {
  }

  onClick(e) {
    alert(`${e.target.innerText} Fired`);
  }

}
