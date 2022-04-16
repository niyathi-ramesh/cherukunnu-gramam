import { Component, OnDestroy, Renderer2 } from '@angular/core';

import { defaultLang } from './app.constants';
import { UtilService } from './shared/services/util.service';

@Component({
  selector: 'cg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  constructor(private renderer: Renderer2, private utilService: UtilService) {
    const lang = sessionStorage.getItem('lang') || defaultLang;
    this.utilService.initializeLanguage();

    if (lang === 'ml') {
      this.renderer.addClass(document.body, 'malayalam-font');
    } else {
      this.renderer.removeClass(document.body, 'malayalam-font');
    }
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'malayalam-font');
  }
}
