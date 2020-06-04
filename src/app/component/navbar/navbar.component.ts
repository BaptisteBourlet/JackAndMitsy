import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ]
    )]
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document) { }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 400) {
      let element = document.getElementById('navbar');
      element.classList.add('sticky');
    } else {
      let element = document.getElementById('navbar');
      element.classList.remove('sticky');
    }
  }
  isShow
  ngOnInit() {
    if (screen.width < 800) {
      this.isShow = true;
    }
  }



  icon = 'assets/images/show.svg';
  toggleDisplay() {

    this.isShow = !this.isShow;
    if (this.isShow === false) {
      this.icon = 'assets/images/hide.svg';
    } else {
      this.icon = 'assets/images/show.svg'
    }
  }
  hideNav() {
    this.isShow = true
    this.icon = 'assets/images/show.svg'
  }
}
