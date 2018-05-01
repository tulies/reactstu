import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { counter} from './index.reducer'
import { Provider } from 'react-redux';

// 新建store , 传入reducer函数
const store = createStore(
    counter,
    compose(
        applyMiddleware(thunk), //异步执行用
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //这个参数 为了redux插件用。
    )
);

//新建store
const render = ()=>{
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
        ,document.getElementById('root')
    );
};
render();

store.subscribe(render);

