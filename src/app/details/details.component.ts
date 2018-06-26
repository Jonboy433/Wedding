import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component-v2.html',
  styleUrls: ['./details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {  

  }

  ngOnInit() {

    console.log('inside DETAILS ngOnInit()');

  }

}
