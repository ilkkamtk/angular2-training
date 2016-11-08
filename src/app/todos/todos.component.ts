import {Component, OnInit} from '@angular/core';
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todo: string = '';
  items: any[] = [];

  constructor(private todoService: TodoService) {
  }

  addTodo() {
    this.items.push({name: this.todo});
    this.todo = '';
  };

  ngOnInit() {
    this.items = this.todoService.getItems();
  }

}
