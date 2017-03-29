import fetch from 'isomorphic-fetch';
export const SEARCH_DATA = 'SEARCH_DATA';

//添加数据
export function searchAction(text) {
  console.log("action"+text);
  return {
    type: SEARCH_DATA,
    text
  };
}
