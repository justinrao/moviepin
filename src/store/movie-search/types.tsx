import { Movie } from "../../models/movie";
import { ActionWithPayload } from "../types";
import { MovieSearchParams } from "../../services/movieApi";
import { Action } from "redux";

export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';

export const SEARCH_MOVIES = 'SEARCH_MOVIES';

export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';

export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';


export interface UpdateSearchTextAction extends ActionWithPayload<typeof UPDATE_SEARCH_TEXT, string> {};

export interface SearchMoviesAction extends Action<typeof SEARCH_MOVIES> {};

export interface SearchMoviesSuccessAction extends ActionWithPayload<typeof SEARCH_MOVIES_SUCCESS, Movie[]> {};

export interface SearchMoviesFailureAction extends ActionWithPayload<typeof SEARCH_MOVIES_FAILURE, Error>{}

export type MovieSearchActions = UpdateSearchTextAction | SearchMoviesAction | SearchMoviesSuccessAction | SearchMoviesFailureAction 