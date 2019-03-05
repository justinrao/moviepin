import { all } from "redux-saga/effects";
import notificationSagas from "./notification/sagas";

export default function* uiSagas() {
  yield all([ 
    notificationSagas(),
  ])
}