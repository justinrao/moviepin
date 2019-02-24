import { combineReducers } from "redux";
import { authReducer, AuthState } from "./auth/reducer";
import { userMoviesReducer, UserMoviesState } from './user-movie/reducer';
import { uiReducer, UIState } from "./ui/reducer";
import { MovieSearchState, movieSearchReducer } from "./movie-search/reducer";


export interface RootState {
  ui: UIState
  auth: AuthState,
  userMovies: UserMoviesState
  movieSearch: MovieSearchState;
}

const rootReducers = combineReducers({
  ui: uiReducer, 
  auth: authReducer, 
  userMovies: userMoviesReducer,
  movieSearch: movieSearchReducer,
});

export default rootReducers;