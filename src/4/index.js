import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from  './Dashboard';
import Login from  './Login';


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
            <Switch>
                <Route path="/dashboard" component={Dashboard}  />
                <Route path="/login" component={Login}  />
                {/*<Route component={Dashboard}/>*/}
                <Redirect to="/dashboard"></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
);

