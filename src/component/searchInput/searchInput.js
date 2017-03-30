import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import SearchInputStyle from './searchInput.scss';
// import { browserHistory } from 'react-router';

export default class SearchInput extends Component {
  constructor(props){
      super(props);
  }
  render() {
    return (
      <div className="search-view">
        <input type='text' ref='searchData'  className="search-input" placeholder="输入产品名称,如凯丰"/>
        <button onClick={ e => this.handleClick(e) } className="search-btn">
         查一下
        </button>
      </div>
    );
  }
  handleClick(e) {
    const inputNode = findDOMNode(this.refs.searchData);
    const text = inputNode.value.trim();
    if(!text){
      return;
    }
    this.props.onSearchClick(text);
    //进入到下个页面显示列表数据
    console.log("进入到下个页面");
    // this.contents.history.pushState(null,'/searchResult');
    // browserHistory.push('/searchResult');//跳转页面
  }
}

SearchInput.propTypes = {
  onSearchClick: PropTypes.func.isRequired
};
