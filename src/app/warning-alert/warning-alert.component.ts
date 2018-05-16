import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-warning-alert',
  template: `
  <h2>
  Alert for Warning.
  </h2>`,
  styles: [`
    h2 { 
      color: red;
      padding: 20px;
      border: 1px solid red;
      background-color: mistyrose;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
