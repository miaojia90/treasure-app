import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import { History, Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Router } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import SearchItem from '../../component/searchItem/searchItem';
import * as searchAction from '../../redux/actions/searchAction';
import SearchResultStyle from './searchResult.scss';
import { fetchJson } from '../../utils/fetch';
//查询结果列表
class SearchResult extends Component {
    constructor(props, context) {
        super(props, context);
        this.searchData=""+ (props.location.query) ? props.location.query.searchData : null;
        this.state={
            services:[]
        }
        //第一步触发Action获取数据
        // this.props.actions.getSearchContent(this.searchData);
    }
    componentDidMount(){
        //触发dispatch函数获取查询结果
        console.log(this.props.actions);
        this.props.actions.fetchsearchData(this.searchData);
  //       fetchJson({
		// 	url:"https://wx.jinfuzi.com/search?keyword="+this.searchData+"&cate=1&page=1&pageSize=30",
		// 	type:"GET",
		// 	success:(res)=>{
		// 		console.log(res);
  //               this.setState({
  //                   services : res.data.items
  //               })
		// 	}
		// });
    }
    render() {
    	//获取Action
    	// console.log(this.state.services);
        const {searchDataList,actions}=this.props;
        console.log(searchDataList);
        let arryList=searchDataList?searchDataList.data:null;
        return ( 
        	<div className="search-result-list">
	            <div className="search-result-desc">
                   查询“<span className="search-key">{this.searchData}</span>”的结果列表
	            </div>
                {
                  (arryList && arryList.length > 0) ? arryList.map((item , index) => {
                    return <SearchItem key={index} projectName={item.fundName} unitValue={item.unitNet} receipts={(item.profitRate*100).toFixed(2)+'%'} date={item.updateTime}/>
                  }) : null
                } 
                
            </div>
        )
    }
}
SearchResult.propTypes ={
    actions: PropTypes.object.isRequired
}
//使用context中的属性值
SearchResult.contextTypes  = {
    router: PropTypes.object
}
function mapStateToProps(state){
    return {
       searchDataList:state.searchResultReducer
    };
}
function mapDispatchToProps(dispatch){
     return {
        //根据传入的store.dispatch和action通过bindActionCreators进行绑定，再将返回的对象绑定到store
        actions:bindActionCreators(searchAction,dispatch)
     }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchResult);
