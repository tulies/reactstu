import React from 'react';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { addNum, reduceNum, addNumAsync } from './reducers/Counter.reducer'

// const mapStateProps = (state)=>{
//     return {num:state};
// };
//
// const actionCreators = {addNum, reduceNum, addNumAsync};
// App = connect(mapStateProps,actionCreators)(App);
@connect(
    state=>state.Counter,
    {addNum, reduceNum, addNumAsync}
)
class App extends React.Component {
    render(){
        return (
            <div>
                <div>数值为：{this.props.num}</div>
                <Button onClick={this.props.addNum}>增加数值</Button>
                <Button onClick={this.props.reduceNum}>减少数值</Button>
                <Button onClick={this.props.addNumAsync}>异步增加数值</Button>
            </div>
        );
    }
}

export default App;