import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import {History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import SearchInput from '../../component/searchInput/searchInput';
import SearchItem from '../../component/searchItem/searchItem';
import {searchAction} from '../../redux/actions/indexAction';
import SearchResultStyle from './searchResult.scss'
class SearchResult extends Component {
    constructor() {
        super();  
    }
    render() {
        const { dispatch} = this.props;
        return (
           <div className="main-box">
             <div className="search-input-component">
                <SearchInput onAddClick={text=>dispatch(searchAction(text))} />
             </div>
             <SearchItem className=""/>
           </div>
        )
    }
}

function select(state){
    return {
       
    };
}
export default connect(select)(SearchResult);

