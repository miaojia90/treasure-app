import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Index from '../containers/index/index'; 

class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}
const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
const searchResult = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/searchResult/searchResult').default)
    },'searchResult');
}

const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={Index} />
            <Route path="index" component={Index} />
            <Route path="searchResult" getComponent={searchResult} />
            <Redirect from='*' to='/'  />
        </Route>
    </Router>
);

export default RouteConfig;