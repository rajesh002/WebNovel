import { Component, OnInit } from '@angular/core';
import { SelectedItemService } from './../selected-item.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SelectedItemService],
})
export class HeaderComponent implements OnInit {
  constructor(private selected: SelectedItemService) {}
  data: String;
  temp: string = 'hai';
  ngOnInit(): void {
    this.data = this.selected.data;

    console.log(this.selected.temp);
  }
  dataPass(selectedItem): void {
    this.selected.temp = selectedItem;
  }
}
