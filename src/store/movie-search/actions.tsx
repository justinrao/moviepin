import { Movie } from "../../models/movie";
import { UpdateSearchTextAction, UPDATE_SEARCH_TEXT, SearchMoviesAction, SEARCH_MOVIES, SearchMoviesSuccessAction, SEARCH_MOVIES_SUCCESS, SearchMoviesFailureAction, SEARCH_MOVIES_FAILURE } from "./types";


export const updateSearchText = (search: string): UpdateSearchTextAction => ({
  type: UPDATE_SEARCH_TEXT,
  payload: search
})

export const searchMovies = (): SearchMoviesAction => ({
  type: SEARCH_MOVIES
})

export const searchMoviesSuccess = (movies: Movie[]): SearchMoviesSuccessAction => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload: movies
})

export const searchMoviesFailure = (error: Error): SearchMoviesFailureAction => ({
  type: SEARCH_MOVIES_FAILURE,
  payload: error
})