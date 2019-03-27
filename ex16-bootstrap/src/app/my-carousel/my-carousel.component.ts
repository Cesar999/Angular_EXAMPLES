import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-carousel',
  templateUrl: './my-carousel.component.html',
  styleUrls: ['./my-carousel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyCarouselComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/400?random&t=${Math.random()}`);

  constructor() { }

  @ViewChild('carousel') carousel: NgbCarousel;

  ngOnInit() {
    //this.carousel.pause();
  }


}
