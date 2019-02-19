
import { UserMovie } from '../../models/userMovie';
import { LOAD_USER_MOVIES, LOAD_USER_MOVIES_SUCCESS, LOAD_USER_MOVIES_FAILURE, POST_USER_MOVIE, POST_USER_MOVIE_SUCCESS, POST_USER_MOVIE_FAILURE } from './types';

export const loadUserMovies = () => ({
  type: LOAD_USER_MOVIES
})

export const loadUserMovieSuccess = (userMovies: UserMovie[]) => ({
  type: LOAD_USER_MOVIES_SUCCESS,
  payload: userMovies
})

export const loadUserMovieFailure = (error: Error) => ({
  type: LOAD_USER_MOVIES_FAILURE,
  payload: error
})


export const postUserMovie = (movieId: number, rating: number) => ({
  type: POST_USER_MOVIE,
  payload: {movieId, rating}
})

export const postUserMovieSuccess = (userMovie: UserMovie) => ({
  type: POST_USER_MOVIE_SUCCESS,
  payload: userMovie
})

export const postUserMovieFailure = (error: Error) => ({
  type: POST_USER_MOVIE_FAILURE,
  payload: error
})