import { Component, OnInit } from '@angular/core';
import { novels } from '../novelImp';
import { novelInterface } from '../novelInterface';
@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css'],
})
export class HistoricalComponent implements OnInit {
  constructor() {}
  term: string;
  novels: novelInterface[];
  action: boolean;

  ngOnInit(): void {
    this.novels = novels;
  }
}
