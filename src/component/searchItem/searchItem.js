import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import SearchItemStyle from './searchItem.scss';

export default class SearchList extends Component {
  render() {
    return (
      <div className="list-item-view">
          <div className="item-title">
             <span className="itemName">项目名称</span>
          </div> 
          <div className="item-data">
             <div className="data-left-text">
               <span>单位净值</span>
             </div>
             <div className="data-right-text">
               <span>1.56</span>
             </div>
          </div>
          <div  className="item-data-desc" >
               <div className="data-left-text">
                  单位净值<span className="data-date">(10-01)</span>
               </div>
               <div className="data-right-text">
                  累计收益   
               </div>
          </div> 
      </div>
    );
  }

}
