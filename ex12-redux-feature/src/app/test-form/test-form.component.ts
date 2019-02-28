import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
  frameworks = ['Angular', 'React', 'Vue'];
  subscriptions = ['Basic', 'Intermediate', 'Advance', 'Pro'];

  // displayMessage: boolean;
  // displayDetails: boolean;
  // selectedSubscription: string;
  // selectedFramework: string;

  displayMessage = false;
  displayDetails = false;
  selectedFramework = this.frameworks[0];
  selectedSubscription = this.subscriptions[1];

  constructor(private store: Store<any>) { }

  ngOnInit() {
    // this.displayMessage = false;
    // this.displayDetails = false;
    // this.selectedFramework = this.frameworks[0];
    // this.selectedSubscription = this.selectedSubscription[1];

    this.store.select('form-test').subscribe(
      products => {
        if (products) {
          this.displayMessage = products.showMessage;
          this.displayDetails = products.showDetails;
          this.selectedFramework = products.framework;
          this.selectedSubscription = products.subscription;
        }
      });
  }

  messageChanged(value: boolean) {
    this.store.dispatch({
      type: 'TOGGLE_MESSAGE',
      payload: value
    });
  }

  detailsChanged(value: boolean) {
    this.store.dispatch({
      type: 'TOGGLE_DETAILS',
      payload: value
    });
  }

  frameworkChanged(value: string) {
    this.store.dispatch({
      type: 'SELECTED_FRAMEWORK',
      payload: value
    });
  }

  subscriptionChanged(value: string) {
    this.store.dispatch({
      type: 'SELECTED_SUBSCRIPTION',
      payload: value
    });
  }

}
