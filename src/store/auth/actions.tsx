
import { LOG_OUT, LOG_OUT_FAILURE, LOG_OUT_SUCCESS, LOG_IN, LOG_IN_FAILURE, LOG_IN_SUCCESS, SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from './types';
import { User } from '../../models/user';

export const logIn = (email: string, password: string) => ({
  type: LOG_IN,
  payload: { email, password }
})

export const logInSuccess = (user: User) => ({
  type: LOG_IN_SUCCESS,
  payload: user
})

export const logInFailure = (error: Error) => ({
  type: LOG_IN_FAILURE,
  payload: error
})

export const logOut = () => ({
  type: LOG_OUT
})

export const logOutSuccess = () => ({
  type: LOG_OUT_SUCCESS
})

export const logOutFailure = (error: Error) => ({
  type: LOG_OUT_FAILURE,
  payload: error
})

export const signUp = (email: string, password: string) => ({
  type: SIGN_UP,
  payload: { email, password }
})

export const signUpSuccess = (user: User) => ({
  type: SIGN_UP_SUCCESS,
  payload: user
})

export const signUpFailure = (error: Error) => ({
  type: SIGN_UP_FAILURE,
  payload: error
})
