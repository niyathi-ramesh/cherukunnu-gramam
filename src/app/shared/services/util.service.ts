import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { defaultLang } from 'src/app/app.constants';

@Injectable()
export class UtilService {
  constructor(private translateService: TranslateService) {}

  initializeLanguage() {
    const lang = sessionStorage.getItem('lang') || defaultLang;
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(lang);
  }
}
