import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {SearchService} from "./search.service";
import {ReactiveFormsModule} from "@angular/forms";

const routes = [
  {
    path: '',
    component: SearchComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [SearchComponent],
  providers: [SearchService]
})
export class SearchModule { }
