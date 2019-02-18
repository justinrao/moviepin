import { combineReducers } from "redux";
import { userMovies, UserMoviesState } from './user-movie/reducer';


export interface RootState {
  userMovies: UserMoviesState
}

const rootReducers = combineReducers({
  userMovies
});

export default rootReducers;