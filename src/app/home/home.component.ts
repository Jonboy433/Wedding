import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('inside HOME ngOnInit()');

    if (this.route.snapshot.fragment != undefined) {
      console.log('HOME: Fragment '+ this.route.snapshot.fragment + ' found. Scrolling to that location');
      let id = this.route.snapshot.fragment
      this.scrollToAnchor(id)
    } else {
      // Scroll to top of page whenever init is called
      console.log('HOME: fragment is undefined. Scroll to top');
   $('html,body').animate({scrollTop: top},'fast');
   } 

  }

  scrollToAnchor(id: string) {
    function scrollToAnchor(id) {
      var tag = $("#"+id+"");
      $('html,body').animate({scrollTop: tag.offset().top},'fast');
    }

    // Call above jquery
    scrollToAnchor(id);

  }
}
