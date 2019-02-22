import { User } from "../../models/user";

export const LOG_IN_USER = 'LOG_IN_USER';
export const LOG_IN_USER_SUCCESS = 'LOG_IN_USER_SUCCESS';
export const LOG_IN_USER_FAILURE = 'LOG_IN_USER_FAILED';


export const LOG_OUT_USER = 'LOG_OUT_USER';
export const LOG_OUT_USER_SUCCESS = 'LOG_OUT_USER_SUCCESS';
export const LOG_OUT_USER_FAILURE = 'LOG_OUT_USER_FAILURE';

export interface LogInUserAction {
  type: typeof LOG_IN_USER,
  payload: {
    email: string;
    password: string;
  }
}

export interface LogInUserSuccessAction {
  type: typeof LOG_IN_USER_SUCCESS;
  payload: User;
}

export interface LogInUserFailureAction {
  type: typeof LOG_IN_USER_FAILURE,
  payload: Error
}

export interface LogOutUserAction {
  type: typeof LOG_OUT_USER
}

export interface LogOutUserSuccessAction {
  type: typeof LOG_OUT_USER_SUCCESS
}

export interface LogOutUserFailureAction {
  type: typeof LOG_OUT_USER_FAILURE,
  payload: Error
}

export type AuthActionTypes =
  LogInUserAction |
  LogInUserSuccessAction |
  LogInUserFailureAction |
  LogOutUserAction |
  LogOutUserSuccessAction |
  LogOutUserFailureAction;