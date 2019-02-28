import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNumber:number;
  oddNumbers:number[] = [];
  evenNumbers:number[] = [];
  
  onIntervalFired(firedNumber: number){
    this.showNumber = firedNumber;
    if(firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
    }
    else{
      this.oddNumbers.push(firedNumber);
    }
  }

  onDestroy(){
    this.oddNumbers.pop();
  }

}
