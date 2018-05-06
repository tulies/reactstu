import React from 'react';
import { connect } from 'react-redux';
import { Route,Switch } from 'react-router-dom';
import { NavBar } from 'antd-mobile';


import Boss from '../boss';
import Genius from '../genius';
import User from '../user';
import Msg from '../msg';
import NavLinkBar from '../../component/navlink';

import { recvMsg, getMsgList} from '../../reducers/chat.reducer'


@connect(
    state=>state,
    { recvMsg, getMsgList}
)
class Dashboard extends React.Component{
    componentDidMount(){
        if (!this.props.Chat.chatmsg.length) {
            this.props.getMsgList();
            this.props.recvMsg();
        }
    }
    render(){
        const {pathname} = this.props.location;
        const user = this.props.User;
        const navList = [
            {
                path:'/boss',
                text:'牛人',
                icon:'boss',
                title:'牛人列表',
                component:Boss,
                hide:user.type === 'genius'
            },
            {
                path:'/genius',
                text:'boss',
                icon:'job',
                title:'BOSS列表',
                component:Genius,
                hide:user.type === 'boss'
            },
            {
                path:'/msg',
                text:'消息',
                icon:'msg',
                title:'消息列表',
                component:Msg
            },
            {
                path:'/me',
                text:'我',
                icon:'user',
                title:'个人中心',
                component:User
            }
        ];
        const curnav = navList.find(v=>v.path === pathname);
        return (
            <div id="tab-bar">
                <NavBar mode='dard'>{curnav ? curnav.title: ''}</NavBar>
                <Switch>
                    {navList.map(v=>(
                        <Route key={v.text} component={v.component} path={v.path}></Route>
                    ))}
                </Switch>
                <NavLinkBar navList={navList}></NavLinkBar>
            </div>

        )
    }
}
export default Dashboard;

