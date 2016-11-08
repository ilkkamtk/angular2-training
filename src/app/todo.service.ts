import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  private items: any[] = [
    { name: 'Do the Laundry', done: false },
    { name: 'Clean my room', done: false }
  ];

  constructor() { }

  getItems() {
    return this.items;
  }

  getItemByIndex(index: number){
    return this.items[index];
  }
}
