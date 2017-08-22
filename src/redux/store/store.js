// import { createStore ,compose} from 'redux'
// import thunk from "redux-thunk";
// import rootReducer from '../reducer'

// const finalCreateStore = compose(
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )(createStore);

// export default function configureStore(initialState) {
//   const store = finalCreateStore(rootReducer, initialState);

//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('../reducer', () => {
//       const nextReducer = require('../reducer')
//       store.replaceReducer(nextReducer)
//     })
//   }

//   return store
// }

import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducer  from '../reducer/index';
import thunk from 'redux-thunk';

//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。

var store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store;