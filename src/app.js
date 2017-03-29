import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import route from './router/route'; //路由配置
import store from './redux/store/store';

store.subscribe(() => { //监听state变化
    console.log(store.getState())
});

ReactDOM.render(
	<Provider store={store}>
       {route}
    </Provider>,
    document.getElementById('appBox')
);

