import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { defaultLang } from 'src/app/app.constants';

export interface Result {
  type: 'paragraph' | 'list';
  content: string[];
}

export interface Data {
  results: Result[];
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  lang: string;

  constructor(private http: HttpClient) {
    this.lang = sessionStorage.getItem('lang') || defaultLang;
  }

  getData(jsonFile: string) {
    const url = `assets/data/${this.lang}/${jsonFile}.json`;
    return this.http.get<Data>(url);
  }
}
