import React, {Component, PropTypes} from 'react';
import pureRender from 'pure-render-decorator';
import {History, Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Router } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import SearchInput from '../../component/searchInput/searchInput';
import SearchKeyList from '../../component/searchKeyList/searchKeyList';
import IndexStyle from './index.scss';
import * as searchAction from '../../redux/actions/searchAction';

class Index extends Component {
    constructor(props,context) {
        super(props,context);  
    }
    handleSave(text){
      console.log("属性值：",this.props);
      if(text.length !== 0){
         //调用绑定的到action上的dispatch方法调用store中的reducer返回新的state
         this.props.actions.addToSearchKey(text);
         //跳转页面到下个页面
         console.log("this对象",this.context); 
         this.context.router.push({
              pathname: '/searchResult',
              query: {
                searchData: text
              }  
         });
      }
    }
    render() {
        const {searchDataArry,actions}=this.props;
        return (
           <div className="main-box">
             <div className="logo-box">
                <img src="https://wx.jinfuzi.com/images/index/logo2.png" alt="logo"/>
             </div>
             <SearchInput onSave={this.handleSave.bind(this)} actions={actions} {...this.props}  searchModule={searchDataArry}/>
             <SearchKeyList searchDataArry={searchDataArry}/>
           </div>
        )
    }
}

Index.propTypes ={
    actions: PropTypes.object.isRequired
}
//使用context中的属性值
Index.contextTypes  = {
    router: PropTypes.object
}

//将state绑定到props的
function mapStateToProps(state){
    return {
       searchDataArry:state.searchDataArry
    };
}
//绑定Action值到props上
function mapDispatchToProps(dispatch){
     return {
        actions:bindActionCreators(searchAction,dispatch)
     }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);

