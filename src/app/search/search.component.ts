import {Component, OnInit} from '@angular/core';
import {SearchService} from "./search.service";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  items: Observable<any[]>;
  private control = new FormControl();

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.items = this.control.valueChanges
      .debounceTime(1000)
      // .filter(term => term.length > 0) tai if lause alempana
      .distinctUntilChanged()
      .switchMap(term => term.length > 0 ? this.searchService.search(term) : Observable.of([]));
  }
}
