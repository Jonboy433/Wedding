import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component-v2.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('inside HOME ngOnInit()');

  } 
}
