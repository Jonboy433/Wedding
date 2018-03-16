import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    console.log('Inside NavBar OnInit');
    
    // Fix the navbar to the top position when they scroll down
    $(window).scroll(function(){
      if ($(this).scrollTop() > 136) {
        $("#main-nav-container").attr('class', 'has_content fixed');
      } else {
        $("#main-nav-container").attr('class', 'has_content');
      }
    });

    var onMenuButtonPressed = function() {
      $("#main-nav").toggleClass("visible"),
      $(".main-nav-container-container").toggleClass("nav-open"),
      $(document.body).toggleClass("nav-open") 

  }

  }

  menuItemClicked() {

    let id = this.route.snapshot.fragment;
    
    if(id != undefined) {
      this.scrollToAnchor(id);
    } else {
      // no fragment - they clicked main item so scroll to top of page
      $('html,body').animate({scrollTop: top},'fast'); 
    }

    //Close the nav bar when its clicked
    var mq = window.matchMedia('(max-width: 770px)');
    if(mq.matches){
       $("#main-nav").toggleClass("visible"),
      $(".main-nav-container-container").toggleClass("nav-open"),
      $(document.body).toggleClass("nav-open")
    } else {

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
