import { User } from "../../models/user";
import { AuthActionTypes, LOG_IN_USER, LOG_IN_USER_SUCCESS, LOG_IN_USER_FAILURE, LOG_OUT_USER, LOG_OUT_USER_SUCCESS, LOG_OUT_USER_FAILURE } from "./types";

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: boolean;
  errorMessage?: string;
}

const INIT_STATE: AuthState = {
  user: null,
  loading: false,
  error: false
};

export const authReducer = (state = INIT_STATE, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOG_IN_USER:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: ''
      }

    case LOG_IN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: false
      }

    case LOG_IN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.message
      }

      case LOG_OUT_USER:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: ''
      }

    case LOG_OUT_USER_SUCCESS:
      return {
        ...state,
        user: null,
        loading: false,
        error: false
      }

    case LOG_OUT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.message
      }

    default:
      return state;
  }
}