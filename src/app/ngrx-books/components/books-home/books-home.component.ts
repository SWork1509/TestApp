import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeBooksAPI } from '../../store/books.action';
import { selectBooks } from '../../store/books.selector';

@Component({
  selector: 'app-books-home',
  templateUrl: './books-home.component.html',
  styleUrls: ['./books-home.component.scss'],
})
export class BooksHomeComponent implements OnInit {

  books$ = this._store.pipe(select(selectBooks))

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this._store.dispatch(invokeBooksAPI())
  }

}
