import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {Result, List,WhiteSpace,Modal} from 'antd-mobile';
import browserCookies from 'browser-cookies';
import {logout} from '../../reducers/user.reducer';

@connect(
    state=>state.User,
    {logout}
)
class User extends React.Component{

    logout(){
        console.log('3232');
        Modal.alert('注销', '确认退出登录吗???', [
            { text: '取消', onPress: () => console.log('cancel') },
            { text: '确认', onPress: () => {
                browserCookies.erase('userid');
                this.props.logout();
            }},
        ])
    }
    render(){

        return this.props.hasAuthed ? (this.props.uname ? (
            <div>
                <Result
                    img={<img src={require(`../../component/img/${this.props.avatar}.png`)} style={{width:50}} alt="" />}
                    title={this.props.uname}
                    message={this.props.type==='boss'?this.props.company:null}
                />

                <List renderHeader={()=>'简介'}>
                    <List.Item
                        multipleLine
                    >
                        {this.props.title}
                        {this.props.desc.split('\n').map(v=><List.Item.Brief key={v}>{v}</List.Item.Brief>)}
                        {this.props.money?<List.Item.Brief>薪资:{this.props.money}</List.Item.Brief>:null}
                    </List.Item>

                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    <List.Item onClick={()=>this.logout()}>退出登录</List.Item>
                </List>
            </div>
        ): <Redirect to='/login' />):null;

    }
}
export default User;