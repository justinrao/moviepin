import { UserMovie } from "../../models/userMovie";
import { UserMoviesActionTypes, LOAD_USER_MOVIES, LOAD_USER_MOVIES_SUCCESS, LOAD_USER_MOVIES_FAILURE, POST_USER_MOVIE, POST_USER_MOVIE_FAILURE, POST_USER_MOVIE_SUCCESS } from "./types";

export interface UserMoviesState {
  userMovies: UserMovie[];
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

const INIT_STATE: UserMoviesState = {
  userMovies: [],
  loading: false,
  error: false,
  errorMessage: ''
};

export const userMovies = (state = INIT_STATE, action: UserMoviesActionTypes): UserMoviesState => {
  switch (action.type) {
    case LOAD_USER_MOVIES:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: ''
      }

    case LOAD_USER_MOVIES_SUCCESS:
      return {
        ...state,
        userMovies: action.payload,
        loading: false,
        error: false
      }

    case LOAD_USER_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.message
      }

    case POST_USER_MOVIE:
      return {
        ...state,
        error: false
      }
    case POST_USER_MOVIE_SUCCESS:
      // remove existing user-movie
      const userMovie = action.payload;
      const userMovies = state.userMovies
        .filter(um => um.movieId !== userMovie.movieId);

      return {
        ...state,
        error: false,
        userMovies: [...userMovies, userMovie]
      }
    case POST_USER_MOVIE_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.message
      }
    default:
      return state;
  }
}