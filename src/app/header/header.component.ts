import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready( () => {

      // tslint:disable-next-line: only-arrow-functions
      $('.nav-link').click( function() {
        $('.nav-link i').toggleClass('iconG-menu iconG-close');
        $('#navbar-fixed').toggleClass('stickybg');
    });
      $('.dropdown-menu.megamenu').click( (event) => {
      if (event.target.tagName.toLowerCase() === 'a') {
      } else {
        event.stopImmediatePropagation();
      }
    });
      $('li.dropdown').mouseover( function() {
        $(this).addClass('active');
      });
      $('li.dropdown').mouseout( function() {
      $(this).removeClass('active');
      });
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $('li.dropdown').mouseover( function() {
        $(this).addClass('active');
      });
      $('li.dropdown').mouseout( function() {
        $(this).removeClass('active');
      });
     }
      $(document).click( (e) => {
       const $clicked = $(e.currentTarget);
        // e.stopPropagation();
        // if the clicked element is not a descendent of the dropdown
       if ($clicked.closest('.dropdown-menu').length === 0) {

          // close the dropdown
          $('.dropdown').removeClass('show');
          $('.nav-link i').removeClass('iconG-close');
          $('.nav-link i').addClass('iconG-menu');
          $('#navbar-fixed').removeClass('stickybg');
        }
      });
    });
// HEADER STICKY JS
    // tslint:disable-next-line: only-arrow-functions
    window.onscroll = function() { myFunction(); };
// Get the header
    // tslint:disable-next-line: prefer-const
    let header = document.getElementById('navbar-fixed');
// Get the offset position of the navbar
    const sticky = header.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

  }

}
