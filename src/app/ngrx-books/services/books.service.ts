import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../store/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _http: HttpClient) { }

  getBooksList(): Observable<IBook[]> {
    return this._http.get<IBook[]>("http://localhost:3000/books")
  }
}
