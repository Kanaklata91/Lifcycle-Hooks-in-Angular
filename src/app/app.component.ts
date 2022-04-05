import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  val: string = 'Hello Kanak , lets test lifecycle hooks.';
  EnteredText(val: string) {
    this.val = val;
  }
}
