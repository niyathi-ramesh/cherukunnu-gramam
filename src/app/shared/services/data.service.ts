import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    this.lang = localStorage.getItem('lang') || 'en';
  }

  getData(jsonFile: string) {
    const url = `assets/data/${this.lang}/${jsonFile}.json`;
    return this.http.get<Data>(url);
  }
}
