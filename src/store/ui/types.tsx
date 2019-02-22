
export const OPEN_LOGIN_DIALOG = 'OPEN_LOGIN_DIALOG';
export const CLOSE_LOGIN_DIALOG = 'CLOSE_LOGIN_DIALOG';


export const OPEN_LOGOUT_DIALOG = 'OPEN_LOGOUT_DIALOG';
export const CLOSE_LOGOUT_DIALOG = 'CLOSE_LOGOUT_DIALOG';

export interface OpenLoginDialogAction {
  type: typeof OPEN_LOGIN_DIALOG
}

export interface CloseLoginDialogAction {
  type: typeof CLOSE_LOGIN_DIALOG
}

export interface OpenLogoutDialogAction {
  type: typeof OPEN_LOGOUT_DIALOG
}

export interface CloseLogoutDialogAction {
  type: typeof CLOSE_LOGOUT_DIALOG
}

export type UIActionTypes = OpenLoginDialogAction | CloseLoginDialogAction | OpenLogoutDialogAction | CloseLogoutDialogAction