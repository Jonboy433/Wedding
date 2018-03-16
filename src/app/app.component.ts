import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Event  } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  displayTitle: boolean;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.displayTitle = false;
  }

  ngOnInit() {
    console.log('Inside App OnInit');
    console.log('Current value of displayTitle: ' + this.displayTitle);

    this.router.events
    .filter((event) => event instanceof NavigationEnd)
    .subscribe((event:NavigationEnd) => {
      if (event.url == '/' || event.url.includes('/#')) {
        // If true we're on the homepage; set displayTitle to true
        this.displayTitle = true;
      } else {
        // We are on another page so set back to false
        this.displayTitle = false;
      }
    });
  }


}
