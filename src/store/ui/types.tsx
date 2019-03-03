
export const OPEN_AUTH_LOGIN_DIALOG = 'OPEN_AUTH_LOGIN_DIALOG';

export const OPEN_AUTH_LOGOUT_DIALOG = 'OPEN_AUTH_LOGOUT_DIALOG';

export const OPEN_AUTH_SIGNUP_DIALOG = 'OPEN_AUTH_SIGNUP_DIALOG';

export const OPEN_AUTH_SIGNUP_CONFIRM_DIALOG = 'OPEN_AUTH_SIGNUP_CONFIRM_DIALOG';

export const CLOSE_AUTH_DIALOG = 'CLOSE_AUTH_DIALOG';


export interface OpenAuthLoginDialogAction {
  type: typeof OPEN_AUTH_LOGIN_DIALOG
}

export interface OpenAuthSignUpDialogAction {
  type: typeof OPEN_AUTH_SIGNUP_DIALOG
}

export interface OpenAuthSignUpConfirmDialogAction {
  type: typeof OPEN_AUTH_SIGNUP_CONFIRM_DIALOG
}

export interface OpenAuthLogoutDialogAction {
  type: typeof OPEN_AUTH_LOGOUT_DIALOG
}

export interface CloseAuthDialogAction {
  type: typeof CLOSE_AUTH_DIALOG
}

export type UIActionTypes = 
  OpenAuthLoginDialogAction |
  OpenAuthSignUpDialogAction |
  OpenAuthSignUpConfirmDialogAction |
  OpenAuthLogoutDialogAction |
  CloseAuthDialogAction;