import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ObserverService } from './../observer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private messageService: ObserverService) { }
  message;
  @ViewChild('testInput') testInput: ElementRef;

  clearSearchInput() {
     this.testInput.nativeElement.value = '';
  }

  ngOnInit() {
  }

  sendMessage(msg: string): void {
    // send message to subscribers via observable subject
    this.message = msg;
    this.messageService.sendMessage(msg);

    this.clearSearchInput();
  }

clearMessage(): void {
    this.messageService.clearMessage();
}

}
