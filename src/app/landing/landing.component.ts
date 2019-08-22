import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready( () => {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.becomeAtutor').owlCarousel({
          items: 1,
          margin: 10,
          loop: true,
          nav: false
      });
     }

      $('.becomeAtutor').owlCarousel({
      items: 1,
      margin: 10,
      loop: true,
      nav: true,
      navText: ['<i class=\'fa fa-angle-left\'></i>', '<i class=\'fa fa-angle-right\'></i>']
  });

      $('.tTestimonials').owlCarousel({
      items: 1,
      margin: 10,
      loop: true
  });

});
  }

}
