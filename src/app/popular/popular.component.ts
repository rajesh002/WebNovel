import { Component, OnInit } from '@angular/core';
import { novels } from '../novelImp';
import { novelInterface } from '../novelInterface';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {
  constructor() {}

  term: string;
  novels: novelInterface[];
  action: boolean;

  ngOnInit(): void {
    this.novels = novels;
  }
}
