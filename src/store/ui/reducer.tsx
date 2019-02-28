
import { CLOSE_AUTH_DIALOG, OPEN_AUTH_LOGIN_DIALOG, OPEN_AUTH_LOGOUT_DIALOG, OPEN_AUTH_SIGNUP_DIALOG, UIActionTypes } from './types';

export interface UIState {
  authDialog: AuthDialogState;
}

export type AuthDialogType = 'LOGIN' | 'LOGOUT' | 'SIGNUP';

export interface AuthDialogState {
  type?: AuthDialogType;
  open: boolean;
}

const INITIAL_STATE: UIState = {
  authDialog: {
    open: false
  }
}

export const uiReducer = (state: UIState = INITIAL_STATE, action: UIActionTypes): UIState => {
  return {
    ...state,
    authDialog: authDialogReducer(state.authDialog, action)
  }
}

const authDialogReducer = (state: AuthDialogState, action: UIActionTypes): AuthDialogState => {
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