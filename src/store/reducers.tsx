import { combineReducers } from "redux";
import { userMovies } from './user-movie/reducer';

const reducers = combineReducers({
  userMovies
}) 

export default reducers;