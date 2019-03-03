import { Auth } from 'aws-amplify';
import { call, put, takeLatest } from 'redux-saga/effects';
import { User } from '../../models/user';
import { closeAuthDialog, openAuthSignupConfirmDialog } from '../ui/actions';
import { logInFailure, logInSuccess, logOutFailure, logOutSuccess, signUpFailure, signUpSuccess } from './actions';
import { LogInAction, LogOutAction, LOG_IN, LOG_OUT, SignUpAction, SIGN_UP } from './types';

export function* logIn(action: LogInAction) {

  const { email, password } = action.payload;

  try {
    const cognitoUser = yield call([Auth, Auth.signIn], email, password);
    const userInfo = yield call([Auth, Auth.currentUserInfo]);
    const user = { cognitoUser, userInfo };
    yield put(logInSuccess(user as unknown as User))
    yield put(closeAuthDialog());
  } catch (e) {
    yield put(logInFailure(e));
  }
}

export function* logOut(action: LogOutAction) {
  try {
    yield call([Auth, Auth.signOut]);
    yield put(logOutSuccess());
    yield put(closeAuthDialog());
  } catch (e) {
    yield put(logOutFailure(e));
  }
}

function* signUp(action: SignUpAction) {
  const { email, password } = action.payload;
  try {
    const response = yield call([Auth, Auth.signUp], { username: email, password });
    yield put(signUpSuccess(response.user));
    yield put(openAuthSignupConfirmDialog());
  } catch (e) {
    yield put(signUpFailure(e));
  }
}

export default function* authSagas() {
  yield takeLatest(LOG_IN, logIn);
  yield takeLatest(LOG_OUT, logOut);
  yield takeLatest(SIGN_UP, signUp);
}