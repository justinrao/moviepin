import { Auth } from 'aws-amplify';
import { put, takeLatest, call } from 'redux-saga/effects';
import { User } from '../../models/user';
import { logInUserFailure, logInUserSuccess, logOutUserFailure, logOutUserSuccess } from './actions';
import { LogInUserAction, LogOutUserAction, LOG_IN_USER, LOG_OUT_USER } from './types';
import { closeAuthDialog } from '../ui/actions';

export function* logInUser(action: LogInUserAction) {

  const {email, password} = action.payload;

  try {
    const cognitoUser = yield call([Auth, Auth.signIn], email, password);
    const userInfo = yield call([Auth, Auth.currentUserInfo]);
    const user = {cognitoUser, userInfo};
    yield put(logInUserSuccess(user as unknown as User))
    yield put(closeAuthDialog());
  } catch (e) {
    console.log(e); 
    yield put(logInUserFailure(e));
  }
}

export function* logOutUser(action: LogOutUserAction) {
  try {
    yield call([Auth, Auth.signOut]);
    yield put(logOutUserSuccess());
    yield put(closeAuthDialog());
  } catch (e) {
    yield put(logOutUserFailure(e));
  }
}

export default function* authSagas() {
  yield takeLatest(LOG_IN_USER, logInUser);
  yield takeLatest(LOG_OUT_USER, logOutUser);
}