import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('init');
  }
}
