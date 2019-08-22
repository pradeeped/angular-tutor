import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

ngOnInit(): void {
  $(document).ready( () => {
// Back to top show button
const btn = $('.backtotop');
// tslint:disable-next-line: only-arrow-functions
$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    btn.addClass('backtoshow');
  } else {
    btn.removeClass('backtoshow');
  }
});

// tslint:disable-next-line: only-arrow-functions
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop: 0}, '200');
});
});

  }

}
