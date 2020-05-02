import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products: any;
  constructor() {}
  ngOnInit(): void {}
  share() {
    window.alert('This product has been shares!');
  }
  Notify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
