import { CloseAuthDialogAction, CLOSE_AUTH_DIALOG, OpenAuthLoginDialogAction, OpenAuthLogoutDialogAction, OpenAuthSignUpDialogAction, OPEN_AUTH_LOGIN_DIALOG, OPEN_AUTH_LOGOUT_DIALOG, OPEN_AUTH_SIGNUP_DIALOG } from "./types";

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

