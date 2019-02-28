import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {

  private subject = new BehaviorSubject<any>('');

  constructor() { }

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  clearMessage() {
    this.subject.next('');
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
