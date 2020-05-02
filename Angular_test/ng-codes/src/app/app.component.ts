import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  title = 'ng-codes';
  name = 'Trình Hương';
  Border = true;
  message = 'Click me!';
  ngOnInit() {}
  method1() {
    this.Border = !this.Border;
    this.message = this.Border ? 'Click me!' : 'No, stop!';
  }
}
