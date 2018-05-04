import React from 'react';
import Logo from '../../component/logo';
import { connect } from 'react-redux';
import { login } from '../../reducers/user.reducer';
import { Redirect } from 'react-router-dom';
import { List, InputItem, Button, WhiteSpace } from 'antd-mobile';

@connect(
    state=>state.User,
    { login }
)
class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            uname:'',
            upass:''
        };
        this.handleRegister = this.handleRegister.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleChange(key, val){
        this.setState({[key]: val});
    }
    handleRegister(){
        console.log('跳转注册去');
        this.props.history.push('/register')
    }
    handleLogin(){
        console.log(this.state);
        this.props.login(this.state);

    }

    render(){
        return (
            <div>
                {this.props.redirectTo? <Redirect to={this.props.redirectTo} />:null}
                <Logo/>
                {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}

                <List>
                    <InputItem onChange={v=>this.handleChange('uname',v)}>用户名</InputItem>
                    <InputItem onChange={v=>this.handleChange('upass',v)}>密码</InputItem>
                </List>
                <WhiteSpace />
                <Button type='primary' onClick={this.handleLogin}>登录</Button>
                <WhiteSpace />
                <Button onClick={this.handleRegister}>注册</Button>
            </div>
        )
    }
}
export default Login;