import { UserMovie } from "../../models/userMovie";
import { ApiError } from "../../models/api-error";

export const LOAD_USER_MOVIES = 'LOAD_USER_MOVIES';
export const LOAD_USER_MOVIES_SUCCESS = 'LOAD_USER_MOVIES_SUCCESS';
export const LOAD_USER_MOVIES_FAILED = 'LOAD_USER_MOVIES_FAILED';

interface LoadUserMoviesAction {
  type: typeof LOAD_USER_MOVIES
}

interface LoadUserMoviesSuccessAction {
  type: typeof LOAD_USER_MOVIES_SUCCESS,
  payload: UserMovie[] 
}


interface LoadUserMoviesFailedAction {
  type: typeof LOAD_USER_MOVIES_FAILED,
  payload: ApiError
}

export type UserMoviesActionTypes = LoadUserMoviesAction | LoadUserMoviesSuccessAction | LoadUserMoviesFailedAction;