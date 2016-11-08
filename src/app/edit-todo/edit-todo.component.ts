import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  index: number;
  item: any;

  constructor(private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.index = params.index;
      this.item = this.todoService.getItemByIndex(this.index);
    })
  }

}
