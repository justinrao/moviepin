import { UserMovie } from "../../models/userMovie";
import { UserMoviesActionTypes, LOAD_USER_MOVIES, LOAD_USER_MOVIES_SUCCESS, LOAD_USER_MOVIES_FAILED } from "./types";

export interface UserMoviesState {
  userMovies: UserMovie[];
  loading: boolean;
  errorMessage: string;
}

const INIT_STATE: UserMoviesState = {
  userMovies: [],
  loading: false,
  errorMessage: ''
};

export const userMovies = (state = INIT_STATE, action: UserMoviesActionTypes): UserMoviesState => {
  switch (action.type) {
    case LOAD_USER_MOVIES:
      return {
        ...state,
        loading: true,
        errorMessage: ''
      }

    case LOAD_USER_MOVIES_SUCCESS:
      return {
        ...state,
        userMovies: action.payload,
        loading: false
      }

    case LOAD_USER_MOVIES_FAILED:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.message
      }

    default:
      return state;
  }
}