import { createFeatureSelector } from "@ngrx/store";
import { IBook } from "./book";

export const selectBooks = createFeatureSelector<IBook[]>("mybooks")