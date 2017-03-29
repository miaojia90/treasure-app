import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import SearchInputStyle from './searchInput.scss';

export default class AddTodo extends Component {
  render() {
    return (
      <div className="search-view">
        <input type='text' ref='input'  className="search-input" placeholder="输入产品名称,如凯丰"/>
        <button onClick={ e => this.handleClick(e) } className="search-btn">
         查一下
        </button>
      </div>
    );
  }

  handleClick(e) {
    const inputNode = findDOMNode(this.refs.input);
    const text = inputNode.value.trim();
    this.props.onAddClick(text);
    inputNode.value = '';
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
