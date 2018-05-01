import React from 'react';
import { Button } from 'antd-mobile';

class App extends React.Component {
    render(){
        return (
            <div>
                <div>哈哈哈</div>
                <Yiying boss='王嘉炀'/>
            </div>
        );
    }
}

class Yiying extends React.Component{
    constructor(props){
        super(props);
        this.state={
            solders:['tulies','freals']
        }

        // this.clickbtn = this.clickbtn.bind(this);
    }

    clickbtn(){
        console.log('clickbtn');
        console.log(this.state);
    }
    render(){
        return (<div>
            {/*<button onClick={()=>this.clickbtn()}>点击我</button>*/}
            {/*<button onClick={this.clickbtn.bind(this)}>点击我</button>*/}
            <Button type="primary" onClick={this.clickbtn.bind(this)}>点击我</Button>
            一营老大：{this.props.boss}
            <ul>
                {this.state.solders.map((v)=>{
                    return <li>{v}</li>
                })}
            </ul>
            </div>)
    }
}
export default App;