import React from 'react';
import Logo from '../../component/logo';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { List, InputItem, WhiteSpace, Button, Radio } from 'antd-mobile';
import { register } from '../../reducers/user.reducer'

const RadioItem = Radio.RadioItem;


@connect(
    state=>state.User,
    { register }
)
class Register extends React.Component{

    constructor(){
        super();
        this.state = {
            uname:'',
            upass:'',
            repeatupass:'',
            type:'genius' // 或者boss
        };
        this.handleRegister = this.handleRegister.bind(this)
    }
    handleChange(key, val){
        this.setState({[key]: val});
    }
    handleRegister(){
        console.log(this.state);
        this.props.register(this.state);
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
                    <InputItem onChange={v=>this.handleChange('repeatupass',v)}>确认密码</InputItem>
                </List>
                <List renderHeader={()=>'职业选择'} >
                    <RadioItem checked={this.state.type === 'genius'} onChange={()=>this.handleChange('type','genius')}>牛人</RadioItem>
                    <RadioItem checked={this.state.type === 'boss'} onChange={()=>this.handleChange('type','boss')}>BOSS</RadioItem>

                </List>
                <WhiteSpace />
                <Button type='primary' onClick={this.handleRegister}>注册</Button>
            </div>
        )
    }
}
export default Register;