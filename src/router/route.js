import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Index from '../containers/index/index'; 

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Index}>
            <IndexRoute component={Index} />
            <Route path="index" component={Index} />
            <Redirect from='*' to='/'  />
        </Route>
    </Router>
);

export default RouteConfig;