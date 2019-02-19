import { UserMovie } from "../../models/userMovie";

export const LOAD_USER_MOVIES = 'LOAD_USER_MOVIES';
export const LOAD_USER_MOVIES_SUCCESS = 'LOAD_USER_MOVIES_SUCCESS';
export const LOAD_USER_MOVIES_FAILURE = 'LOAD_USER_MOVIES_FAILED';


export const POST_USER_MOVIE = 'POST_USER_MOVIE';
export const POST_USER_MOVIE_SUCCESS = 'POST_USER_MOVIE_SUCCESS';
export const POST_USER_MOVIE_FAILURE = 'POST_USER_MOVIE_FAILURE';

export interface LoadUserMoviesAction {
  type: typeof LOAD_USER_MOVIES
}

export interface LoadUserMoviesSuccessAction {
  type: typeof LOAD_USER_MOVIES_SUCCESS,
  payload: UserMovie[] 
}

export interface LoadUserMoviesFailureAction {
  type: typeof LOAD_USER_MOVIES_FAILURE,
  payload: Error
}

export interface PostUserMovieAction {
  type: typeof POST_USER_MOVIE,
  payload: UserMovie
}

export interface PostUserMovieSuccessAction {
  type: typeof POST_USER_MOVIE_SUCCESS,
  payload: UserMovie
}

export interface PostUserMovieFailureAction {
  type: typeof POST_USER_MOVIE_FAILURE,
  payload: Error
}

export type UserMoviesActionTypes = 
  LoadUserMoviesAction | 
  LoadUserMoviesSuccessAction | 
  LoadUserMoviesFailureAction |
  PostUserMovieAction |
  PostUserMovieSuccessAction |
  PostUserMovieFailureAction;