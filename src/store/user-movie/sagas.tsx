import { LoadUserMoviesAction, LOAD_USER_MOVIES } from "./types";
import { UserMovieApi } from "../../services/userMovieApi";
import { call, put, takeLatest } from 'redux-saga/effects';
import { loadUserMovieSuccess, loadUserMovieFailed } from "./actions";
import MoviesApi from "../../services/movieApi";
import { UserMovie } from "../../models/userMovie";

export function* loadUserMovies(action: LoadUserMoviesAction) {
  try {
    const userMovieList = yield call(UserMovieApi.getUserMovieList);
    const movieIds = userMovieList.map((i: UserMovie) => i.movieId);
    const movieList = yield call(MoviesApi.getList, movieIds);

    const userMovieListWithMovies = userMovieList.map(
      (um: UserMovie, idx: number) => ({
        ...um,
        movie: movieList[idx]
      }))
    //   setMovieList(movieList);
    yield put(loadUserMovieSuccess(userMovieListWithMovies));
  } catch (e) {
    yield put(loadUserMovieFailed(e));
  }
}

export default function* userMoviesSagas() {
  yield takeLatest(LOAD_USER_MOVIES, loadUserMovies);
}