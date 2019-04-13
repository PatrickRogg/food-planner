import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public title: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.title = 'Planned Meals';
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('grocery-list')) {
          this.title = 'Grocery List';
        }
        if (event.url.includes('home')) {
          this.title = 'Planned Meals';
        }
        if (event.url.includes('meal-list')) {
          this.title = 'Meals';
        }
      }
    });
  }

}
