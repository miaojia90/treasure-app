import Immutable from 'immutable';
import {combineReducers } from 'redux';
import  searchReducer from './searchReducer'
const Reducers = combineReducers({searchReducer});
export default Reducers;