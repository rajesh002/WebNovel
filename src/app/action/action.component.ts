import { Component, OnInit } from '@angular/core';
import { novels } from '../novelImp';
import { novelInterface } from '../novelInterface';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
})
export class ActionComponent implements OnInit {
  constructor() {}

  novels: novelInterface[];
  action: boolean;
  term: string;
  ngOnInit(): void {
    this.novels = novels;
  }
}
