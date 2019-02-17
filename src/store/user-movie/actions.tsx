
import { UserMovie } from '../../models/userMovie';
import { LOAD_USER_MOVIES, LOAD_USER_MOVIES_SUCCESS, LOAD_USER_MOVIES_FAILED } from './types';
import { ApiError } from '../../models/api-error';

export const loadUserMovies = () => ({
  type: LOAD_USER_MOVIES
})

export const loadUserMovieSuccess = (userMovies: UserMovie[]) => ({
  type: LOAD_USER_MOVIES_SUCCESS,
  payload: userMovies
})

export const loadUserMovieFailed = (error: ApiError) => ({
  type: LOAD_USER_MOVIES_FAILED,
  payload: error
})

