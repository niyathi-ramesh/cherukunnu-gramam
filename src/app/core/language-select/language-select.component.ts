import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cg-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
})
export class LanguageSelectComponent implements OnInit {
  lang!: string;
  constructor() {}

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }

  changeLang(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;

    localStorage.setItem('lang', lang);
    window.location.reload();
  }
}
