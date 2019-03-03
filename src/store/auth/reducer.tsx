import { User } from "../../models/user";
import { CLOSE_AUTH_DIALOG } from "../ui/types";
import { AuthActionTypes, LOG_IN, LOG_IN_FAILURE, LOG_IN_SUCCESS, LOG_OUT, LOG_OUT_FAILURE, LOG_OUT_SUCCESS, SIGN_UP, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from "./types";

export interface AuthState {
  user?: User;
  username?: string;
  loading: boolean;
  error: boolean;
  errorMessage?: string;
}

const INIT_STATE: AuthState = {
  loading: false,
  error: false
};

export const authReducer = (state = INIT_STATE, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case SIGN_UP:
    case LOG_IN:
      return {
        username: action.payload.email,
        loading: true,
        error: false,
        errorMessage: ''
      }
    case LOG_OUT:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: ''
      }
    case LOG_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: false
      }

    case LOG_OUT_SUCCESS:
      return {
        ...state,
        user: undefined,
        loading: false,
        error: false
      }

    case LOG_IN_FAILURE:
    case LOG_OUT_FAILURE:
    case SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.message
      }

    case CLOSE_AUTH_DIALOG:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: ''
      }

    default:
      return state;
  }
}