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
  products = [
    {
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
    },
    {
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
    },
    {
      name: 'Phone Standard',
      price: 299,
      description: '',
    },
  ];
  ngOnInit() {}
  method1() {
    this.Border = !this.Border;
    this.message = this.Border ? 'Click me!' : 'No, stop!';
  }
}
