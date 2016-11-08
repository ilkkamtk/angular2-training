import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {TodosComponent} from './todos/todos.component';
import {TodoComponent} from './todo/todo.component';
import {EditTodoComponent} from './edit-todo/edit-todo.component';
import {TodoService} from './todo.service';

const routes = [
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'edit-todo/:index',
    component: EditTodoComponent
  },
  {
    path: 'search',
    loadChildren: 'app/search/search.module#SearchModule'
  }

];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
