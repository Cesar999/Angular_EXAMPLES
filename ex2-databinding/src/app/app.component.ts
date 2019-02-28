import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = ``;
  num = 0;
  elementValue = ``;
  @ViewChild('childInput') childInput : ElementRef;
  childValue = ``;

  getRandom() {
    this.num =  Math.floor( Math.random() * 100);
    return this.num;
  }

  updateUsername(event: Event){
    this.username = (<HTMLInputElement>event.target).value;
  }

  onTest(e : HTMLInputElement){
    this.elementValue = e.value;
    console.log(e);
  }

  onChild(){
    this.childValue = this.childInput.nativeElement.value;
    console.log(this.childInput);
  }
}
