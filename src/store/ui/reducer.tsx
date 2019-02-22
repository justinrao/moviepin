
import { logOutUserSuccess } from '../auth/actions';
import { UIActionTypes, OPEN_LOGIN_DIALOG, CLOSE_LOGIN_DIALOG, OPEN_LOGOUT_DIALOG, CLOSE_LOGOUT_DIALOG } from './types';

export interface UIState {
  loginDialogOpened: boolean;
  logoutDialogOpened: boolean;
}

const INITIAL_STATE: UIState = {
  loginDialogOpened: false,
  logoutDialogOpened: false
}

export const uiReducer = (state: UIState = INITIAL_STATE, action: UIActionTypes): UIState => {
  switch (action.type) {
    case OPEN_LOGIN_DIALOG:
      return { ...state, loginDialogOpened: true };
    case CLOSE_LOGIN_DIALOG:
      return { ...state, loginDialogOpened: false };
    case OPEN_LOGOUT_DIALOG:
      return { ...state, logoutDialogOpened: true };
    case CLOSE_LOGOUT_DIALOG:
      return { ...state, logoutDialogOpened: false };
    default:
      return state;
  }
}