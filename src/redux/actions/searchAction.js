import {fetchJson} from '../../utils/fetch';
export const  ADD_SEARCH_KEY='ADD_SEARCH_KEY';
export const  Get_SEARCH_CONTENT='Get_SEARCH_CONTENT';//定义一个获取查询内容的Action Type

//保存数据
export function addToSearchKey(text){
	console.log(text);
   return {
   	 type:ADD_SEARCH_KEY,
   	 text
   }
}

//获取数据的方法
export function fetchsearchData(searchData){	
 	return (dispatch)=>{
      fetchJson({
      	// url:"http://mockjs",
		url:"https://wx.jinfuzi.com/search?keyword="+searchData+"&cate=1&page=1&pageSize=30",
		type:"GET",
		headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
		success:(res)=>{
            dispatch({
			   	type:Get_SEARCH_CONTENT,
			   	data:res.data.items                	
            });   
		}
      });
 	}
}



