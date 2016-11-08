import {Component, OnInit, Input, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [trigger('doneTrigger', [
    state('done', style({
      'transform': 'scale(1)'
    })),
    state('notDone', style({
      'transform': 'scale(0.9)'
    })),
    transition('notDone => done', animate('1000ms ease-in')),
    transition('done => notDone', animate('1000ms ease-out')),
    transition('void => *', animate('2000ms ease-out'))
  ])]
})
export class TodoComponent implements OnInit {

  @Input() item: any;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
