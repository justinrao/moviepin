import { all } from "redux-saga/effects";
import userMoviesSagas from "./user-movie/sagas";
import authSagas from "./auth/sagas";

export default function* rootSagas() {
  yield all([ 
    userMoviesSagas(),
    authSagas()
  ])
}