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

function searchReducer(state = initialState, action) {
  console.log("reducer",action);
  switch (action.type) {
    //触发添加的Action
    case ADD_SEARCH_KEY:
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
