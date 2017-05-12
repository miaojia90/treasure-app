import fetch from 'isomorphic-fetch';
export const  ADD_SEARCH_KEY='ADD_SEARCH_KEY';

//保存数据
export function addToSearchKey(text){
	console.log(text);
   return {
   	 type:ADD_SEARCH_KEY,
   	 text
   }
}
