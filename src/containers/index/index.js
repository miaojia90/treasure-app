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
         //此时ui组件就可以在props中找到actionCreator
         //调用绑定的到action上的dispatch方法调用store中的reducer返回新的state
         this.props.actions.addToSearchKey(text);//自动调用dispatch
         //在dispatch中会调用getState获取整个state
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
        //获取Action
        const {searchDataArry,actions}=this.props;
        return (
           <div className="main-box">
             <div className="logo-box">
             {
              /*注释写法*/
                <img src={require("./img/logo2.png")}/>
             }
             </div>
             <SearchInput onSave={this.handleSave.bind(this)} actions={actions} {...this.props}  searchModule={searchDataArry}/>
             <SearchKeyList searchDataArry={searchDataArry} searchKeyClick={this.handleSave.bind(this)} />
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
//mapStateToProps获取stateProps并将新旧两个stateProps进行浅对比
//不相同则调用this.setState()触发Connect组件的更新
function mapStateToProps(state){
    return {
       searchDataArry:state.searchReducer
    };
}

//绑定Action值到props上
function mapDispatchToProps(dispatch){
     return {
        //根据传入的store.dispatch和action通过bindActionCreators进行绑定，再将返回的对象绑定到store
        actions:bindActionCreators(searchAction,dispatch)
     }
}
//mapDispatchToProps 会将对象绑定到store 如果是函数会在connect组件获得store后，
export default connect(mapStateToProps,mapDispatchToProps)(Index);


