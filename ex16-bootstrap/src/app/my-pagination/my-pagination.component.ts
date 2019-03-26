import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pagination',
  templateUrl: './my-pagination.component.html',
  styleUrls: ['./my-pagination.component.css']
})
export class MyPaginationComponent implements OnInit {

  items = [
  {id: 1, class: 'class1'}, {id: 2, class: 'class2'}, {id: 3, class: 'class3'},
  {id: 4, class: 'class4'}, {id: 5, class: 'class5'}, {id: 6, class: 'class6'},
  {id: 7, class: 'class7'}, {id: 8, class: 'class8'}, {id: 9, class: 'class9'},
  {id: 10, class: 'class10'}, {id: 11, class: 'class11'},
  {id: 12, class: 'class12'}, {id: 13, class: 'class13'},
  {id: 14, class: 'class14'}, {id: 15, class: 'class15'},
  {id: 16, class: 'class16'}, {id: 17, class: 'class17'},
  {id: 18, class: 'class18'}, {id: 19, class: 'class19'},
  {id: 20, class: 'class20'}, {id: 21, class: 'class21'},
  {id: 22, class: 'class22'}, {id: 23, class: 'class23'},
  {id: 24, class: 'class24'}, {id: 25, class: 'class25'},
  {id: 26, class: 'class26'}, {id: 27, class: 'class27'},
  {id: 28, class: 'class28'}, {id: 29, class: 'class29'},
  {id: 30, class: 'class30'}, {id: 31, class: 'class31'},
  {id: 32, class: 'class32'}
  ];

  page = 1;
  pageSize = 4;

  constructor() { }

  ngOnInit() {
  }

}
