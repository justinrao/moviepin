import { Action } from "redux";
import { User } from "../../models/user";
import { ActionWithPayload } from "../types";
import { CloseAuthDialogAction } from "../ui/auth-dialog/types";

export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILED';

export const LOG_OUT = 'LOG_OUT';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export interface UserAuth {
  email: string;
  password: string;
}

export interface LogInAction extends ActionWithPayload<typeof LOG_IN, UserAuth> {}

export interface LogInSuccessAction extends ActionWithPayload<typeof LOG_IN_SUCCESS, User> {};

export interface LogInFailureAction extends ActionWithPayload<typeof LOG_IN_FAILURE, Error> {};

export interface LogOutAction extends Action<typeof LOG_OUT> {};

export interface LogOutSuccessAction extends Action<typeof LOG_OUT_SUCCESS> {};

export interface LogOutFailureAction extends ActionWithPayload<typeof LOG_OUT_FAILURE, Error> {};

export interface SignUpAction extends ActionWithPayload<typeof SIGN_UP, UserAuth> {};

export interface SignUpSuccessAction extends ActionWithPayload<typeof SIGN_UP_SUCCESS, User> {};

export interface SignUpFailureAction extends ActionWithPayload<typeof SIGN_UP_FAILURE, Error> {};


export type AuthActionTypes =
  LogInAction |
  LogInSuccessAction |
  LogInFailureAction |
  LogOutAction |
  LogOutSuccessAction |
  LogOutFailureAction |
  SignUpAction |
  SignUpSuccessAction |
  SignUpFailureAction |
  CloseAuthDialogAction;