import React from 'react';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { login } from './reducers/Auth.reducer';
import { Redirect } from 'react-router-dom'

@connect(
    state=>state.Auth,
    { login }
)
class Login extends React.Component{
    render(){
        return this.props.isAuth ? <Redirect to="/dashboard"></Redirect> :(
            <div>
                您还未登录呢，请先登录~
                <Button onClick={this.props.login}>登录</Button>
            </div>
        );
    }
}
export default Login;