import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route} from 'react-router';
import createHistory from 'history/createBrowserHistory'

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export const history = createHistory();

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={history}>
            <Route path="/" component={App}>
            </Route>
        </Router>
    </Provider>
    , document.querySelector('.container'));

