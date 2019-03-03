import { OPEN_AUTH_LOGIN_DIALOG, CLOSE_AUTH_DIALOG, OpenAuthLoginDialogAction, CloseAuthDialogAction, OpenAuthLogoutDialogAction, OPEN_AUTH_LOGOUT_DIALOG, OpenAuthSignUpDialogAction, OPEN_AUTH_SIGNUP_DIALOG, OPEN_AUTH_SIGNUP_CONFIRM_DIALOG, OpenAuthSignUpConfirmDialogAction } from "./types";

export const openAuthLoginDialog = (): OpenAuthLoginDialogAction => ({
  type: OPEN_AUTH_LOGIN_DIALOG
})

export const closeAuthDialog = (): CloseAuthDialogAction => ({
  type: CLOSE_AUTH_DIALOG
})

export const openAuthLogoutDialog = (): OpenAuthLogoutDialogAction => ({
  type: OPEN_AUTH_LOGOUT_DIALOG
})

export const openAuthSignupDialog = (): OpenAuthSignUpDialogAction => ({
  type: OPEN_AUTH_SIGNUP_DIALOG
})

export const openAuthSignupConfirmDialog = (): OpenAuthSignUpConfirmDialogAction => ({
  type: OPEN_AUTH_SIGNUP_CONFIRM_DIALOG
})
