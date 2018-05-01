import React from 'react';
import ReactDOM from 'react-dom';
//applyMiddleware 处理中间件
import { createStore, applyMiddleware,compose } from 'redux';
import trunk from 'redux-thunk';
import { counter } from './reducers/counter.reducer';
import { Provider } from 'react-redux';
import App from './App';

// const store = createStore(
//     counter,
//     applyMiddleware(trunk)
// );
const store = createStore(
    counter,
    compose(
        applyMiddleware(trunk),  //异步执行用
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__(): f=>f  //这个参数 为了redux插件用。
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root')

);

