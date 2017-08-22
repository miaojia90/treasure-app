import {
  ADD_SEARCH_KEY
} from '../actions/searchAction';
//初始化界面的数据
const initialState = [
  {
    id:0,
    text: '凯丰'
  }
]

// reducer会被依次执行进行action.type的判断 如果有则返回一个新的state，如果没有则返回默认
function searchReducer(state = initialState, action) {
  console.log("reducer",action);
  switch (action.type) {
    //触发添加的Action
    case ADD_SEARCH_KEY:
     //combineReducers再次将子reducer返回的单个state进行合并成一个新的完整的state
     //从后台获取数据保存
      return [
        ...state,
        {
          text: action.text,
          id:state.reduce((maxId,itemArry)=>Math.max(itemArry.id,maxId),-1)+1
        }
      ];
    default:
      return state;
  }
}

export default searchReducer;
