import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = `123456`;
  showSecret = false;
  showMessage = true;
  log = [];
  value = 1;
  @ViewChild('selectInput') selectInput : ElementRef;

  onToggle(){
    this.showSecret = !this.showSecret;
  }

  onMessage(){
    this.showMessage = !this.showMessage;
  }

  onCount() {
    this.log.push(this.log.length + 1);
  }

  onRemove() {
    this.log.pop();
  }

  onSelect(){
      this.value=this.selectInput.nativeElement.value;
      console.log(this.value);
  }
}

