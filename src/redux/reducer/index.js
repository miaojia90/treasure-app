import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import searchResultReducer from './searchResultReducer'
//combineReducers会将state依据state的key值分别传给子reducer,并将action传给全部子reducer
const rootReducer = combineReducers({
  searchReducer,
  searchResultReducer
});

export default rootReducer