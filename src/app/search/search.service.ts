import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import {Observable} from "rxjs";

@Injectable()
export class SearchService {

  constructor( private http: Http) { }

  search(term){
    return this.http.get(`https://api.github.com/search/repositories?q=${term}`)
      .map((res: Response) => res.json().items)
      .catch(err => Observable.of([]));
  }
}
