import { Movie } from "../../models/movie";
import { ActionWithPayload } from "../types";
import { MovieSearchParams } from "../../services/movieApi";

export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';

export const SEARCH_MOVIES = 'SEARCH_MOVIES';

export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';

export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';


export interface UpdateSearchTextAction extends ActionWithPayload<string> {
  type: typeof UPDATE_SEARCH_TEXT;
}

export interface SearchMoviesAction {
  type: typeof SEARCH_MOVIES;
}

export interface SearchMoviesSuccessAction extends ActionWithPayload<Movie[]> {
  type: typeof SEARCH_MOVIES_SUCCESS;
}

export interface SearchMoviesFailureAction extends ActionWithPayload<Error>{
  type: typeof SEARCH_MOVIES_FAILURE
}

export type MovieSearchActions = UpdateSearchTextAction | SearchMoviesAction | SearchMoviesSuccessAction | SearchMoviesFailureAction 