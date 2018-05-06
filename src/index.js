import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './container/login';
import Register from './container/register';
import BossInfo from './container/bossinfo';
import GeniusInfo from './container/geniusinfo';
import Dashboard from './container/dashboard';
import Chat from './container/chat';

import Authroute from './component/authroute';
import './index.css'

import './config';
// 新建store , 传入reducer函数
const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk), //异步执行用
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //这个参数 为了redux插件用。
    )
);
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Authroute />
                <Switch>
                    <Route path="/register" component={Register}  />
                    <Route path="/login" component={Login}  />
                    <Route path="/bossinfo" component={BossInfo}  />
                    <Route path="/geniusinfo" component={GeniusInfo}  />
                    <Route path="/chat/:user" component={Chat}  />
                    <Route component={Dashboard}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
);