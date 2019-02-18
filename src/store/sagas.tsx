import { all } from "redux-saga/effects";
import userMoviesSagas from "./user-movie/sagas";

export default function* rootSagas() {
  yield all([ 
    userMoviesSagas()
  ])
}