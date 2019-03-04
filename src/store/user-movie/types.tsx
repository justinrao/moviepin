import { UserMovie } from "../../models/userMovie";
import { ActionWithPayload } from "../types";
import { Action } from "redux";
import { LogInSuccessAction, LogOutSuccessAction } from "../auth/types";

export const LOAD_USER_MOVIES = 'LOAD_USER_MOVIES';
export const LOAD_USER_MOVIES_SUCCESS = 'LOAD_USER_MOVIES_SUCCESS';
export const LOAD_USER_MOVIES_FAILURE = 'LOAD_USER_MOVIES_FAILED';


export const POST_USER_MOVIE = 'POST_USER_MOVIE';
export const POST_USER_MOVIE_SUCCESS = 'POST_USER_MOVIE_SUCCESS';
export const POST_USER_MOVIE_FAILURE = 'POST_USER_MOVIE_FAILURE';

export interface LoadUserMoviesAction extends Action<typeof LOAD_USER_MOVIES> {}

export interface LoadUserMoviesSuccessAction extends ActionWithPayload<typeof LOAD_USER_MOVIES_SUCCESS, UserMovie[]> {}

export interface LoadUserMoviesFailureAction extends ActionWithPayload<typeof LOAD_USER_MOVIES_FAILURE, Error> {}

export interface PostUserMovieAction extends ActionWithPayload<typeof POST_USER_MOVIE, UserMovie> {}

export interface PostUserMovieSuccessAction extends ActionWithPayload<typeof POST_USER_MOVIE_SUCCESS, UserMovie> {};

export interface PostUserMovieFailureAction extends ActionWithPayload<typeof POST_USER_MOVIE_FAILURE, Error> {}

export type UserMoviesActionTypes = 
  LoadUserMoviesAction | 
  LoadUserMoviesSuccessAction | 
  LoadUserMoviesFailureAction |
  PostUserMovieAction |
  PostUserMovieSuccessAction |
  PostUserMovieFailureAction |
  LogInSuccessAction |
  LogOutSuccessAction ;