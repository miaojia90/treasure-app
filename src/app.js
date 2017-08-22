import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import route from './router/route'; //路由配置
import configureStore from './redux/store/store';

// const store = configureStore();
configureStore.subscribe(() => { //监听state变化
    //console.log(store.getState())
});

ReactDOM.render(
	<Provider store={configureStore}>
       {route}
    </Provider>,
    document.getElementById('appBox')
);

