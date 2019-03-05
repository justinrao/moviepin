
import { combineReducers } from 'redux';
import { AuthDialogState, authDialogReducer } from './auth-dialog/reducer';
import { notificationReducer, NotificationState } from './notification/reducer';

export interface UIState {
  authDialog: AuthDialogState;
  notification: NotificationState;
}

export const uiReducer = combineReducers(
  {
    authDialog: authDialogReducer,
    notification: notificationReducer
  }
)
