import React from 'react';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { login,getUserInfo } from './reducers/Auth.reducer';
import { Redirect } from 'react-router-dom'
// import axios from 'axios'

@connect(
    state=>state.Auth,
    { login,getUserInfo }
)
class Login extends React.Component{

    // constructor(props){
    //     super(props);
    //     this.state={
    //         data:{}
    //     }
    // }
    componentDidMount(){
        // axios.get('/data').then((resp)=>{
        //     console.log(resp);
        //     this.setState({'data':resp.data});
        //
        // }).catch((error)=>{
        //     console.log(error);
        // });
        this.props.getUserInfo();
    }
    render(){
        return this.props.isAuth ? <Redirect to="/dashboard"></Redirect> :(
            <div>
                我的名字是：{this.props.name},年龄：{this.props.age}<br/>
                您还未登录呢，请先登录~
                <Button onClick={this.props.login}>登录</Button>
            </div>
        );
    }
}
export default Login;