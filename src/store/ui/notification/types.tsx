import { Action } from 'redux';
import { ActionWithPayload } from '../../types';
import { Notification } from './reducer';

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';

export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';

export interface ShowNotificationAction extends ActionWithPayload<typeof SHOW_NOTIFICATION, Notification> {};

export interface ClearNotificationAction extends Action<typeof CLEAR_NOTIFICATION>{};

export type NotificationActions =
  ShowNotificationAction |
  ClearNotificationAction;