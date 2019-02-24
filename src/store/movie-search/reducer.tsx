import { Movie } from "../../models/movie";
import { MovieSearchActions, SEARCH_MOVIES, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_FAILURE, UPDATE_SEARCH_TEXT } from "./types";
import { FIRST_PAGE_NUMBER } from "../../services/movieApi";

export interface MovieSearchState {
  search: string;
  movies: Movie[];
  loading: boolean;
  page: number;
  error: boolean;
  errorMessage: string;
}

const INITIAL_STATE: MovieSearchState = {
  search: 'Hero',
  movies: [],
  page: FIRST_PAGE_NUMBER,
  error: false,
  errorMessage: '',
  loading: false
}

export const movieSearchReducer = (state: MovieSearchState = INITIAL_STATE, action: MovieSearchActions): MovieSearchState => {
  switch (action.type) {
    case UPDATE_SEARCH_TEXT:
      return {
        ...state,
        search: action.payload,
        page: FIRST_PAGE_NUMBER,
        movies: [],
        loading: true,
        error: false,
        errorMessage: ''
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: ''
      };
    case SEARCH_MOVIES_SUCCESS:
      return { 
        ...state, 
        page: state.page + 1,
        loading: false,
        movies: [...state.movies, ...action.payload],
      };
    case SEARCH_MOVIES_FAILURE:
      return { 
        ...state, 
        loading: false,
        error: true,
        errorMessage: action.payload.message
      };
    default:
      return state;
  }
};