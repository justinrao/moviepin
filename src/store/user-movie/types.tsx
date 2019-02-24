import { UserMovie } from "../../models/userMovie";
import { ActionWithPayload } from "../types";

export const LOAD_USER_MOVIES = 'LOAD_USER_MOVIES';
export const LOAD_USER_MOVIES_SUCCESS = 'LOAD_USER_MOVIES_SUCCESS';
export const LOAD_USER_MOVIES_FAILURE = 'LOAD_USER_MOVIES_FAILED';


export const POST_USER_MOVIE = 'POST_USER_MOVIE';
export const POST_USER_MOVIE_SUCCESS = 'POST_USER_MOVIE_SUCCESS';
export const POST_USER_MOVIE_FAILURE = 'POST_USER_MOVIE_FAILURE';

export interface LoadUserMoviesAction {
  type: typeof LOAD_USER_MOVIES
}

export interface LoadUserMoviesSuccessAction extends ActionWithPayload<UserMovie[]> {
  type: typeof LOAD_USER_MOVIES_SUCCESS
}

export interface LoadUserMoviesFailureAction extends ActionWithPayload<Error> {
  type: typeof LOAD_USER_MOVIES_FAILURE
}

export interface PostUserMovieAction extends ActionWithPayload<UserMovie> {
  type: typeof POST_USER_MOVIE
}

export interface PostUserMovieSuccessAction extends ActionWithPayload<UserMovie> {
  type: typeof POST_USER_MOVIE_SUCCESS
}

export interface PostUserMovieFailureAction extends ActionWithPayload<Error> {
  type: typeof POST_USER_MOVIE_FAILURE
}

export type UserMoviesActionTypes = 
  LoadUserMoviesAction | 
  LoadUserMoviesSuccessAction | 
  LoadUserMoviesFailureAction |
  PostUserMovieAction |
  PostUserMovieSuccessAction |
  PostUserMovieFailureAction;