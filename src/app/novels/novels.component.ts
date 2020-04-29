import { Component, OnInit } from '@angular/core';
import { novels } from '../novelImp';
import { novelInterface } from '../novelInterface';

@Component({
  selector: 'app-novels',
  templateUrl: './novels.component.html',
  styleUrls: ['./novels.component.css'],
})
export class NovelsComponent implements OnInit {
  constructor() {}

  novels: novelInterface[];
  action: boolean;
  term: string;
  ngOnInit(): void {
    this.novels = novels;
  }
}
