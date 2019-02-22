import { combineReducers } from "redux";
import { authReducer, AuthState } from "./auth/reducer";
import { userMoviesReducer, UserMoviesState } from './user-movie/reducer';
import { uiReducer, UIState } from "./ui/reducer";


export interface RootState {
  ui: UIState
  auth: AuthState,
  userMovies: UserMoviesState
}

const rootReducers = combineReducers({
  ui: uiReducer, 
  auth: authReducer, 
  userMovies: userMoviesReducer
});

export default rootReducers;