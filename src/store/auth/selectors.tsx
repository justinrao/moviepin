import { createSelector } from 'reselect';
import { RootState } from "../reducers";
import { AuthState } from "./reducer";

export const selectAuth = (state: RootState) => state.auth;

export const selectUser = createSelector(
  selectAuth,
  (state: AuthState) => state.user
)

export const selectUsername = createSelector(
  selectAuth,
  (state: AuthState) => state.username
)