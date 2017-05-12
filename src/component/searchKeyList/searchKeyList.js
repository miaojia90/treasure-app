import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import SearchKeyListStyle from './searchKeyList.scss';

export default class SearchList extends Component {
  render() {
  	const {searchDataArry}=this.props;
    const searchHistory='';
    let searchKeyList={'text':'金斧子','id':'1'};
    let searchKeyArry=[];
    //对象去重
    for(var item of searchDataArry){
        var flag=false;
        for(var value of searchKeyArry){    	   
           if(item.text==value.text){
           　 flag=true;
              break;
           }
        }
        if(!flag){
        	searchKeyArry.push(item);
        }
    }
    return (
       <div className="search-history">
           <p className="search-history-title">{searchHistory}</p>
	       <div className="item-mark">
	       {searchKeyArry.map(item=><a key={item.id} className="mark-text">{item.text}</a>)}
	       </div>
       </div>
    );
  }
}
