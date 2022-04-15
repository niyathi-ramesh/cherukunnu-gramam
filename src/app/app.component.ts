import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { defaultLang } from './app.constants';

@Component({
  selector: 'cg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  constructor(
    private renderer: Renderer2,
    private translateService: TranslateService
  ) {
    const lang = sessionStorage.getItem('lang') || defaultLang;
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(lang);

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
