import { OPEN_LOGIN_DIALOG, CLOSE_LOGIN_DIALOG, OpenLoginDialogAction, CloseLoginDialogAction, CLOSE_LOGOUT_DIALOG, CloseLogoutDialogAction, OpenLogoutDialogAction, OPEN_LOGOUT_DIALOG } from "./types";

export const openLoginDialog = (): OpenLoginDialogAction => ({
  type: OPEN_LOGIN_DIALOG
})

export const closeLoginDialog = (): CloseLoginDialogAction => ({
  type: CLOSE_LOGIN_DIALOG
})

export const openLogoutDialog = (): OpenLogoutDialogAction => ({
  type: OPEN_LOGOUT_DIALOG
})

export const closeLogoutDialog = (): CloseLogoutDialogAction => ({
  type: CLOSE_LOGOUT_DIALOG
})
