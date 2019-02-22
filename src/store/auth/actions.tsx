
import { LOG_OUT_USER, LOG_OUT_USER_FAILURE, LOG_OUT_USER_SUCCESS, LOG_IN_USER, LOG_IN_USER_FAILURE, LOG_IN_USER_SUCCESS } from './types';
import { User } from '../../models/user';

export const logInUser = (email: string, password: string) => ({
  type: LOG_IN_USER,
  payload: { email, password }
})

export const logInUserSuccess = (user: User) => ({
  type: LOG_IN_USER_SUCCESS,
  payload: user
})

export const logInUserFailure = (error: Error) => ({
  type: LOG_IN_USER_FAILURE,
  payload: error
})

export const logOutUser = () => ({
  type: LOG_OUT_USER
})

export const logOutUserSuccess = () => ({
  type: LOG_OUT_USER_SUCCESS
})

export const logOutUserFailure = (error: Error) => ({
  type: LOG_OUT_USER_FAILURE,
  payload: error
})