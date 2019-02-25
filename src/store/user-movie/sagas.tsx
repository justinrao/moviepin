import { call, put, takeLatest } from 'redux-saga/effects';
import { UserMovie } from "../../models/userMovie";
import MoviesApi from "../../services/movieApi";
import { UserMovieApi } from "../../services/userMovieApi";
import { LoadUserMoviesAction, LOAD_USER_MOVIES, PostUserMovieAction, POST_USER_MOVIE } from "./types";
import { loadUserMovieSuccess, loadUserMovieFailure, postUserMovieFailure, postUserMovieSuccess } from './actions';

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
    yield put(loadUserMovieFailure(e));
  }
}

export function* postUserMovie(action: PostUserMovieAction) {
  const {movieId, rating} = action.payload;
  try {
    const userMovie: UserMovie = yield call(UserMovieApi.rateMovie, movieId, rating);
    const movie = yield call(MoviesApi.get, userMovie.movieId);
    userMovie.movie = movie;

    yield put(postUserMovieSuccess(userMovie));
  } catch (e) {
    console.log(e);

    yield put(postUserMovieFailure(e));
  }
}

export default function* userMoviesSagas() {
  yield takeLatest(LOAD_USER_MOVIES, loadUserMovies);
  yield takeLatest(POST_USER_MOVIE, postUserMovie);
}