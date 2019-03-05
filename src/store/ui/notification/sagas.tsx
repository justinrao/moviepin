import { delay, put, takeLatest } from 'redux-saga/effects';
import { clearNotification } from './actions';
import { ShowNotificationAction, SHOW_NOTIFICATION } from './types';

const NOTIFICATION_DELAY_MS = 1200;

export function* showNotificationSaga(action: ShowNotificationAction) {
  yield delay(NOTIFICATION_DELAY_MS);
  yield put(clearNotification());
}

export default function* notificationSagas() {
  yield takeLatest(SHOW_NOTIFICATION, showNotificationSaga);
}