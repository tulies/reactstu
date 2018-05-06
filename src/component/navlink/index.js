import React from 'react';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

@withRouter
@connect(
    state=>state.Chat
)
class NavLinkBar extends React.Component{
    render(){
        const {pathname} = this.props.location;

        const navList = this.props.navList.filter(v=>!v.hide);
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
            >
                {navList.map(v=>(
                    <TabBar.Item
                        badge={v.path==='/msg'?this.props.unread:0}
                        title={v.title}
                        key={v.text}
                        icon={{uri: require(`../../component/navlink/img/${v.icon}.png`)}}
                        selectedIcon={{uri: require(`../../component/navlink/img/${v.icon}-active.png`)}}
                        selected={pathname === v.path}
                        onPress={() => {
                            this.props.history.push(v.path);
                        }}
                    >
                    </TabBar.Item>
                ))}
            </TabBar>
        );

    }
}
export default NavLinkBar;