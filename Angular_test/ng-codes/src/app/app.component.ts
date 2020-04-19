import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-codes';
  name = 'Trình Hương';
  Border = true;
  message = 'Click me!';
  method1() {
    this.Border = !this.Border;
    this.message = this.Border ? 'Click me!' : 'No, stop!';
  }
}
