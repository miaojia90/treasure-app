import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import route from './router/route'; //路由配置
import configureStore from './redux/store/store';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
       {route}
    </Provider>,
    document.getElementById('appBox')
);

