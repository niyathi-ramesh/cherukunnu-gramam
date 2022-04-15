import { Component, OnInit } from '@angular/core';

import { DataService, Result } from 'src/app/shared/services/data.service';

@Component({
  selector: 'cg-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  introduction!: Result[];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData('introduction').subscribe((data) => {
      this.introduction = data.results;
    });
  }
}
