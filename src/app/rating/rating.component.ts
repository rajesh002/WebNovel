import { Component, OnInit } from '@angular/core';
import { novels } from '../novelImp';
import { novelInterface } from '../novelInterface';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  constructor() {}
  term: string;
  novels: novelInterface[];
  action: boolean;

  ngOnInit(): void {
    this.novels = novels;
  }
}
