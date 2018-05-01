import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { counter} from './index.reducer'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link  } from 'react-router-dom';
// 新建store , 传入reducer函数
const store = createStore(
    counter,
    compose(
        applyMiddleware(thunk), //异步执行用
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //这个参数 为了redux插件用。
    )
);
function Dh2() {
    return <h1>dh2</h1>;
}
function Dh3() {
    return <h1>dh3</h1>;
}

//新建store
const render = ()=>{
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/">导航1</Link></li>
                        <li><Link to="/dh2">导航2</Link></li>
                        <li><Link to="/dh3">导航3</Link></li>
                    </ul>
                    <hr/>
                    <Route path="/" exact component={App}/>
                    <Route path="/dh2" component={Dh2}/>
                    <Route path="/dh3" component={Dh3}/>
                </div>
            </BrowserRouter>
        </Provider>
        ,document.getElementById('root')
    );
};
render();

store.subscribe(render);

