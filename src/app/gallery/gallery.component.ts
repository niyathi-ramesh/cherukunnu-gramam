import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { defaultLang } from '../app.constants';

@Component({
  selector: 'eg-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  galleryImages = [
    { url: 'gallery-1' },
    { url: 'gallery-2' },
    { url: 'gallery-3' },
    { url: 'gallery-4' },
    { url: 'gallery-5' },
    { url: 'gallery-6' },
    { url: 'gallery-7' },
    // { url: 'gallery-8' },
    { url: 'gallery-9' },
    { url: 'gallery-10' },
    { url: 'gallery-11' },
    { url: 'gallery-12' },
    { url: 'gallery-13' },
    { url: 'gallery-14' },
    { url: 'gallery-15' },
    { url: 'gallery-16' },
    { url: 'gallery-17' },
    { url: 'gallery-18' },
    { url: 'gallery-19' },
    { url: 'gallery-20' },
  ];

  constructor(private translateService: TranslateService) {
    const lang = sessionStorage.getItem('lang') || defaultLang;
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(lang);
  }

  ngOnInit(): void {}
}
