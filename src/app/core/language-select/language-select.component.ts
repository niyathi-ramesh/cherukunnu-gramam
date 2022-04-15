import { Component, OnInit } from '@angular/core';

import { defaultLang } from 'src/app/app.constants';

@Component({
  selector: 'cg-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
})
export class LanguageSelectComponent implements OnInit {
  lang!: string;
  constructor() {}

  ngOnInit(): void {
    this.lang = sessionStorage.getItem('lang') || defaultLang;
  }

  changeLang(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;

    sessionStorage.setItem('lang', lang);
    window.location.reload();
  }
}
