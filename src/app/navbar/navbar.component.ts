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

    let screenSize;
    //Get Screen size
    screenSize = $(window).width();

    // Fix the navbar to the top position when they scroll down
    $(window).scroll(function () {
      if ($(this).scrollTop() > 136) {
        $("#main-nav-container").attr('class', 'has_content fixed');
      } else {
        $("#main-nav-container").attr('class', 'has_content');
      }
    });

    if (this.isTablet()) {
      // Add function to menu item that removes the hovered class on click
      $(document).ready(function () {
        let topMenuItem = $('#main-nav > ul > li');

        // 3/27 - changed from touchstart to click; seems to work fine
        topMenuItem.on('touchstart', function () {
          var btnClicked = $(this);

          //Enable pointer events for children ul when this element is clicked
          btnClicked.children('ul').removeClass('disabled');

          // Check sibling dropdown visibility. If it's open when we click on this one we should close it prior to opening this dropdown
          if (btnClicked.attr("id") == "wedding") {
            //Hide details
            $('#details').children('ul').css("visibility", "hidden");
            $('#details').children('ul').css("opacity", "0");
          };

          if (btnClicked.attr("id") == "details") {
            //Hide wedding
            $('#wedding').children('ul').css("visibility", "hidden");
            $('#wedding').children('ul').css("opacity", "0");
          };

          btnClicked.children('ul').css('visibility') == 'visible' ? btnClicked.children('ul').css('visibility', 'hidden') : btnClicked.children('ul').css('visibility', 'visible');
          btnClicked.children('ul').css('opacity') == '0' ? btnClicked.children('ul').css('opacity', '1') : btnClicked.children('ul').css('opacity', '0');

        }).children().not('a').on('touchstart', function (e) {
          e.stopPropagation();
        })
      });

      // Add touchend event to menu item
      $(document).ready(function () {
        var menuItem = $('#main-nav ul li ul li');

        //Changing from touchend to click seems to work for now
        menuItem.on('click', function () {
          var btnClicked = $(this);
          btnClicked.parent().css("visibility", "hidden");
          btnClicked.parent().css("opacity", "0");

          //Handle scrolling
          if (window.location.hash) {
            let tag = $(window.location.hash);
            $('html,body').animate({ scrollTop: tag.offset().top }, 'fast');
          }
          else {
            $('html,body').animate({ scrollTop: 0 }, 'fast');
          }

          //Disable click event on parent element when item is hidden
          btnClicked.parent().addClass('disabled');
        });
      });
    }


    if (!this.isTablet()) {
      $(document).ready(function () {
        let topMenuItem = $('#main-nav ul li');
        topMenuItem.each(function (e) {
          $(this).on('click', function (e) {
            // Prevent event bubbling
            e.stopPropagation();
            if (window.location.hash) {
              let tag = $(window.location.hash);
              $('html,body').animate({ scrollTop: tag.offset().top }, 'fast');
            }
            else {
              $('html,body').animate({ scrollTop: 0 }, 'fast');

              // If using a mobile phone close menu after selection
              if (screenSize < 450) {
                $(onMainNavButtonPressed());
              }
            }
          })
        })
      });
    }

  };

  isTablet() {
    return isTablet;
  }

}
