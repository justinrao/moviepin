import { RootState } from "../reducers";
import { createSelector } from 'reselect';
import { MovieSearchState } from "./reducer";
import { Movie } from "../../models/movie";

export const selectMovieSearchState = (state: RootState) => state.movieSearch;

export const selectMoviesWithPoster = createSelector(
  selectMovieSearchState,
  (state: MovieSearchState) => state.movies.filter((i: Movie) => !!i.poster_path)
)