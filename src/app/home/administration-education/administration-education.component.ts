import { Component, OnInit } from '@angular/core';
import { DataService, Result } from 'src/app/shared/services/data.service';

@Component({
  selector: 'cg-administration-education',
  templateUrl: './administration-education.component.html',
  styleUrls: ['./administration-education.component.scss'],
})
export class AdministrationEducationComponent implements OnInit {
  administration!: Result[];
  education!: Result[];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData('administration').subscribe((data) => {
      this.administration = data.results;
    });
    this.dataService.getData('education').subscribe((data) => {
      this.education = data.results;
    });
  }
}
