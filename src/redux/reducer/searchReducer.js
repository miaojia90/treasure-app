import {
  SEARCH_DATA
} from '../actions/indexAction';

function searchReducer(state = [], action) {
  console.log("reducer"+action.type);
  switch (action.type) {
    case SEARCH_DATA:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    default:
      return state
  }
}

export default searchReducer;
