import { all } from "redux-saga/effects";
import userMoviesSagas from "./user-movie/sagas";
import authSagas from "./auth/sagas";
import movieSearchSagas from "./movie-search/sagas";
import uiSagas from "./ui/sagas";


export default function* rootSagas() {
  yield all([ 
    userMoviesSagas(),
    authSagas(),
    movieSearchSagas(),
    uiSagas()
  ])
}