import {
  Get_SEARCH_CONTENT
} from '../actions/searchAction';
let initStates = null;
// reducer会被依次执行进行action.type的判断 如果有则返回一个新的state，如果没有则返回默认
function searchResultReducer(state=initStates, action) {
  console.log("searchResultReducer",action);
  switch (action.type) {
    case Get_SEARCH_CONTENT:
    // return[{
    //    data:action.data
    // }];
    return Object.assign({},{data:action.data});
    default:
    return state;
  }
}

export default searchResultReducer;
