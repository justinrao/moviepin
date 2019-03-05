import {NotificationActions, CLEAR_NOTIFICATION, SHOW_NOTIFICATION} from './types';
 
export interface NotificationState {
  notification?: Notification
}

export interface Notification {
  line1: string;
  line2: string;
}

const INITIAL_STATE: NotificationState = {
}

export const notificationReducer = (state: NotificationState = INITIAL_STATE, action: NotificationActions): NotificationState => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return { notification: action.payload };
    case CLEAR_NOTIFICATION:
      return INITIAL_STATE;
    default:
      return state;
  }
}