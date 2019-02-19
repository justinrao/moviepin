import { RootState } from "../reducers";
import { UserMovie } from "../../models/userMovie";
import { createSelector } from 'reselect';


export const selectUserMovies = (state: RootState) => state.userMovies.userMovies;

export const selectFavoriteMovies = createSelector(
  [selectUserMovies],
  (userMovies: UserMovie[]) => userMovies.filter(um => um.rating === 5)
)


export const selectFavoriteMovieIds = createSelector(
  [selectFavoriteMovies],
  (userMovies: UserMovie[]) => userMovies.map(um => um.movieId)
)