import { Component, OnInit } from '@angular/core';
import { novels } from '../novelImp';
import { novelInterface } from '../novelInterface';

@Component({
  selector: 'app-realistic',
  templateUrl: './realistic.component.html',
  styleUrls: ['./realistic.component.css'],
})
export class RealisticComponent implements OnInit {
  constructor() {}
  term: string;
  novels: novelInterface[];
  action: boolean;

  ngOnInit(): void {
    this.novels = novels;
  }
}
