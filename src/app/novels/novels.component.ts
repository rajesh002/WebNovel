import { Component, OnInit } from '@angular/core';
import { novels } from '../novelImp';
import { novelInterface } from '../novelInterface';
import { SelectedItemService } from './../selected-item.service';

@Component({
  selector: 'app-novels',
  templateUrl: './novels.component.html',
  styleUrls: ['./novels.component.css'],
  providers: [SelectedItemService],
})
export class NovelsComponent implements OnInit {
  constructor(private selected: SelectedItemService) {}
  data: String = this.selected.temp;
  novels: novelInterface[];
  action: boolean;
  term: string;
  ngOnInit(): void {
    this.novels = novels;
  }
}
