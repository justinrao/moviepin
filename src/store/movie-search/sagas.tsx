import { call, put, takeLatest, select } from 'redux-saga/effects';
import MoviesApi from "../../apis/movieApi";
import { searchMovies as searchMovieAction, searchMoviesFailure, searchMoviesSuccess } from './actions';
import { SearchMoviesAction, SEARCH_MOVIES, UPDATE_SEARCH_TEXT, UpdateSearchTextAction } from "./types";
import { MovieSearchState } from './reducer';
import { selectMovieSearchState } from './selectors';

export function* updateSearchText(action: UpdateSearchTextAction) {
  yield put(searchMovieAction());
}

export function* searchMovie(action: SearchMoviesAction) {
  try {

    const state: MovieSearchState = yield select(selectMovieSearchState); 
    const params = {query: state.search, page: state.page};
    const movies = yield call(MoviesApi.search, params);
    yield put(searchMoviesSuccess(movies.results));
  } catch (e) {
    console.log(e);
    yield put(searchMoviesFailure(e));
  }
}

export default function* movieSearchSagas() {
  yield takeLatest(UPDATE_SEARCH_TEXT, updateSearchText);
  yield takeLatest(SEARCH_MOVIES, searchMovie);
}