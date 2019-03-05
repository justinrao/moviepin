
import { CLOSE_AUTH_DIALOG, OPEN_AUTH_LOGIN_DIALOG, OPEN_AUTH_LOGOUT_DIALOG, OPEN_AUTH_SIGNUP_DIALOG, AuthDialogActionTypes } from './types';

export type AuthDialogType = 'LOGIN' | 'LOGOUT' | 'SIGNUP' ;

export interface AuthDialogState {
  type?: AuthDialogType;
  open: boolean;
}

const INITIAL_STATE: AuthDialogState = {
    open: false
}

export const authDialogReducer = (state: AuthDialogState = INITIAL_STATE, action: AuthDialogActionTypes): AuthDialogState => {
  switch (action.type) {
    case OPEN_AUTH_LOGIN_DIALOG:
      return { type: 'LOGIN', open: true };
    case CLOSE_AUTH_DIALOG:
      return { ...state, open: false };
    case OPEN_AUTH_LOGOUT_DIALOG:
      return { type: 'LOGOUT', open: true };
    case OPEN_AUTH_SIGNUP_DIALOG:
      return { type: 'SIGNUP', open: true };
    default:
      return state;
  }
}