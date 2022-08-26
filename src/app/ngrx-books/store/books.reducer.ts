import { createReducer, on } from "@ngrx/store";
import { IBook } from "./book";
import { booksFetchAPISuccess } from "./books.action";

export const INITIAL_STATE: ReadonlyArray<IBook> = [
    // {
    //     "id": 1,
    //     "title": "Harry Potter",
    //     "author": "J.K Rowlings",
    //     "cost": 300
    // }
];

export const bookReducer = createReducer(
    INITIAL_STATE,
    on(booksFetchAPISuccess, (state, payload) => {
        return payload.allBooks;
    })
);

