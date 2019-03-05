import { SHOW_NOTIFICATION, ShowNotificationAction, ClearNotificationAction, CLEAR_NOTIFICATION } from "./types";
import { Notification } from './reducer';

export const showNotification = (notification: Notification): ShowNotificationAction => ({
  type: SHOW_NOTIFICATION,
  payload: notification
})

export const clearNotification = (): ClearNotificationAction => ({
  type: CLEAR_NOTIFICATION
})
