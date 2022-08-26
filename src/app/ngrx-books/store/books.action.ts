import { createAction, props } from "@ngrx/store";
import { IBook } from "./book";

export const invokeBooksAPI = createAction(
    "[Books API] invoke books Fetch API",
)

export const booksFetchAPISuccess = createAction(
    "[Books API] books Fetch API Success",
    props<{ allBooks: IBook[] }>()
)