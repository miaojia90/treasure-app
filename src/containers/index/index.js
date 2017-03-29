import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import {History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import SearchInput from '../../component/searchInput/searchInput';
import IndexStyle from './index.scss';
import {searchAction} from '../../redux/actions/indexAction';
class Index extends Component {
    constructor() {
        super();  
    }
    render() {
        const { dispatch} = this.props;
        return (
           <div className="main-box">
             <div className="logo-box">
                <img src="https://wx.jinfuzi.com/images/index/logo2.png" alt="logo"/>
             </div>
             <SearchInput onAddClick={text=>dispatch(searchAction(text))}/>
           </div>
        )
    }
}

function select(state){
    return {
       
    };
}
export default connect(select)(Index);

