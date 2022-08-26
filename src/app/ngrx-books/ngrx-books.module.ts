import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxBooksRoutingModule } from './ngrx-books-routing.module';
import { BooksHomeComponent } from './components/books-home/books-home.component';

import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/books.reducer';

// Material Module
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './store/books.effects';

@NgModule({
  declarations: [
    BooksHomeComponent
  ],
  imports: [
    CommonModule,
    NgrxBooksRoutingModule,
    MatCardModule,
    MatListModule,
    StoreModule.forFeature("mybooks", bookReducer),
    EffectsModule.forFeature([BooksEffects])
  ]
})
export class NgrxBooksModule { }
