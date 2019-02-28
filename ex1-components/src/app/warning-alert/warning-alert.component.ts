import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<h2>This is a warning alert!</h2>`,
  styles: [
    `
      h2{
        padding: 20px;
        background-color: black;
        border: 4px solid red;
        color: yellow;
        font-weight: bold;
      }
    `
  ]
})
export class WarningAlertComponent{

}
