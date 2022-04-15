import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../services/data.service';

@Component({
  selector: 'cg-content-template',
  templateUrl: './content-template.component.html',
  styleUrls: ['./content-template.component.scss'],
})
export class ContentTemplateComponent implements OnInit {
  @Input() results!: Result[];
  constructor() {}

  ngOnInit(): void {}
}
