import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import FavReducer from "./FavReducer";

const rootReducer = combineReducers({
     movieReducer,
     FavReducer,
  });
  
export default rootReducer;