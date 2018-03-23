import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {  

  }

  ngOnInit() {

    console.log('inside DETAILS ngOnInit()');

    /* if (this.route.snapshot.fragment != undefined) {
      console.log('DETAILS: Fragment '+ this.route.snapshot.fragment + ' found. Scrolling to that location');
      let id = this.route.snapshot.fragment
      this.scrollToAnchor(id)
    } else {
       // Scroll to top of page whenever init is called
       console.log('DETAILS: fragment is: undefined. Scroll to top');
    $('html,body').animate({scrollTop: top},'fast');
    } */

  }

  scrollToAnchor(id: string) {
    function scrollToAnchor(id) {
      var tag = $("#"+id+"");
      console.log('details scrollToAnchor...scrolling');
      $('html,body').animate({scrollTop: tag.offset().top},'fast');
    }

    // Call above jquery
    scrollToAnchor(id);

  }

}
