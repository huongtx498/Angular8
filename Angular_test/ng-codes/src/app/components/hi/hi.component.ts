import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css'],
})
export class HiComponent implements OnInit {
  constructor() {}
  array1 = [1, 2, 3, 4, 5];
  ngOnInit(): void {}
}
