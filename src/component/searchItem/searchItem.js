import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import SearchItemStyle from './searchItem.scss';

export default class SearchList extends Component {

  render() {
    var projectName=this.props.projectName;
    var unitValue=this.props.unitValue;
    var date=this.props.date;
    var receipts=this.props.receipts;
    return (
      <div className="list-item-view">
          <div className="item-title">
             <span className="itemName">{projectName}</span>
          </div> 
          <div className="item-data">
             <div className="data-left-text">
               <span>{unitValue}</span>
             </div>
             <div className="data-right-text">
               <span>{receipts}</span>
             </div>
          </div>
          <div  className="item-data-desc" >
               <div className="data-left-text">
                  单位净值<span className="data-date">({date})</span>
               </div>
               <div className="data-right-text">
                  累计收益   
               </div>
          </div> 
      </div>
    );
  }

}
