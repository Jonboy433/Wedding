import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var $: any;
declare var onMainNavButtonPressed: any;

// Check user-agent for tablets; if so we need to change navbar behavior. We need to get rid of hover styles
var isTablet: boolean;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    var ua = navigator.userAgent;
    if (ua.includes('iPad') || ua.includes('GT-P7100') || ua.includes('SM-T807V')) {
      isTablet = true;
    }

    else {
      isTablet = false;
    }

  }

  ngOnInit() {
    console.log('Inside NavBar OnInit');

    // Fix the navbar to the top position when they scroll down
    $(window).scroll(function () {
      if ($(this).scrollTop() > 136) {
        $("#main-nav-container").attr('class', 'has_content fixed');
      } else {
        $("#main-nav-container").attr('class', 'has_content');
      }
    });

    // Add function to menu item that removes the hovered class on click
    $(document).ready(function(){
      var topMenuItem = $('#main-nav > ul > li');
      topMenuItem.on('touchstart', function(){
        var btnClicked = $(this);

        btnClicked.children('ul').css('visibility') == 'visible' ? btnClicked.children('ul').css('visibility','hidden') : btnClicked.children('ul').css('visibility','visible');
        btnClicked.children('ul').css('opacity') == '0' ? btnClicked.children('ul').css('opacity','1') : btnClicked.children('ul').css('opacity','0');

      }).children().not('a').on('touchstart', function(e){
        e.stopPropagation();
      })
    });

    // Add touchend event to menu item
    $(document).ready(function () {
      var menuItem = $('#main-nav ul li ul li');
      menuItem.on('touchend', function () {
        var btnClicked = $(this);

        btnClicked.parent().css("visibility","hidden");
        btnClicked.parent().css("opacity","0");
 
      });
    });

  }

  menuItemClicked() {
    let id = this.route.snapshot.fragment;

    if (id != undefined) {
      this.scrollToAnchor(id);
    } else {
      // no fragment - they clicked main item so scroll to top of page
      $('html,body').animate({ scrollTop: top }, 'fast');
    }

    // layout.js - close menu when menu item is clicked on small devices
    // TODO: This should only happen on iPhones
    $(onMainNavButtonPressed());
  }

  menuItemClickedTablet() {
    //

  }

  scrollToAnchor(id: string) {
    function scrollToAnchor(id) {
      var tag = $("#" + id + "");
      $('html,body').animate({ scrollTop: tag.offset().top }, 'fast');
    }

    // Call above jquery
    scrollToAnchor(id);

  }

  isTablet() {
    return isTablet;
  }

}
