import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import SearchKeyListStyle from './searchKeyList.scss';

export default class SearchList extends Component {
  //子组件中需要执行父组件的方法 先写好父组件的方法通过this.xxx.bind(this)调用父组件的方法
  searchKeyClick(text){
    if(!text){
      return;
    }
    this.props.searchKeyClick(text);
  }
  render() {
  	const {searchDataArry}=this.props;
    const searchHistory='查询历史';
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
  	       {searchKeyArry.map(item=><a key={item.id} className="mark-text" onClick={this.searchKeyClick.bind(this,item.text)} ref='searchKeyLable'>{item.text}</a>)}
  	       </div>  
       </div>
    );
  }

}
