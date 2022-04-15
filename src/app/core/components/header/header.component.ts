import { Component, HostListener, OnDestroy } from '@angular/core';
import {
  Router,
  NavigationStart,
  Event as NavigationEvent,
} from '@angular/router';

import { navList } from 'src/app/app.constants';

@Component({
  selector: 'cg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  scrolledToBottom = false;
  readonly navList = navList;
  activeUrl: string | undefined;
  event$;
  openNav = false;

  constructor(private router: Router) {
    this.event$ = this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.activeUrl = event.url.split('/').pop();
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (window.pageYOffset > 100) {
      this.scrolledToBottom = true;
    } else {
      this.scrolledToBottom = false;
    }
  }

  toggleNavigation() {
    this.openNav = !this.openNav;
  }

  ngOnDestroy(): void {
    this.event$.unsubscribe();
  }
}
