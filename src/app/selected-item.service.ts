import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectedItemService {
  data: string = 'hello';
  temp: string = '';
  constructor() {}
}
