import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';
import { addNum, addNumAsync, reduceNum} from './reducers/counter.reducer';

@connect(
    state=>({num: state}),
    {addNum, addNumAsync, reduceNum}
)
class App extends React.Component {
    render(){
        // const store = this.props.store;
        return (
            <div>
                <h1>现在数值为：{this.props.num}</h1>
                <Button onClick={()=>this.props.addNum()}>加1</Button>
                <Button onClick={()=>this.props.reduceNum()}>减1</Button>
                <Button onClick={()=>this.props.addNumAsync()}>延迟2秒加1</Button>
            </div>
        );
    }
}

//上面使用了connect装饰器，不用装饰器的话，可以向下面这样使用。
// const mapStatetoProps = (state)=>{
//     return {num: state};
// };
// const actionCreators = {addNum, addNumAsync, reduceNum};
//
// // 最重要的2个数据 ，其实就是把数据都放到了props中
// App = connect( mapStatetoProps, actionCreators)(App);

export default App;