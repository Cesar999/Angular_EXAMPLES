import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObserverService } from './../observer.service';

@Component({
  selector: 'app-msg2',
  templateUrl: './msg2.component.html',
  styleUrls: ['./msg2.component.css']
})
export class Msg2Component implements OnInit, OnDestroy {

  message: any;
  subscription: Subscription;

  constructor(private messageService: ObserverService) { }

  ngOnInit() {
     // subscribe to home component messages
     this.subscription = this.messageService.getMessage()
     .subscribe(message => {
       this.message = message.text;
      });
  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

}
