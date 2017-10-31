import { Component, OnInit, ViewChildren } from '@angular/core';
import { NavLinkComponent } from './nav-link/nav-link.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  @ViewChildren(NavLinkComponent)
  set childrens(list) {
    console.log(list);
  }

  public links = [
    {
      title: 'Категории',
      link: '/categories',
    },
    {
      title: 'Товары',
      link: '/goods',
    },
    {
      title: 'Заказы',
      link: '/orders',
    },
    {
      title: 'Покупатели',
      link: '/customers',
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
