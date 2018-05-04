import React from 'react';
import { List, Button, TextareaItem, InputItem, NavBar } from 'antd-mobile';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { update } from '../../reducers/user.reducer'
import AvatarSelector from '../../component/avatar-selector'

@connect(
    state=>state.User,
    { update }
)
class GeniusInfo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title:'',
            desc:'',
            avatar:''
        }
    }

    handleChange(key, val){
        this.setState({[key]: val});
    }

    selectAvatar(img){
        console.log(img);
        this.setState({
            avatar:img
        });
    }
    render(){
        const path = this.props.location.pathname;
        const redirect = this.props.redirectTo;
        console.log(path,redirect);
        return (
            <div>
                { (redirect && redirect !== path) ? <Redirect to={redirect} />:null }
                <NavBar>牛人完善信息页</NavBar>
                <List>
                    <AvatarSelector selectAvatar={(img)=>this.selectAvatar(img)}></AvatarSelector>
                    <InputItem onChange={v=>this.handleChange('title',v)}>求职岗位</InputItem>
                    <TextareaItem
                        title='个人简介'
                        rows={3}
                        autoHeight
                        onChange={v=>this.handleChange('desc',v)}
                    ></TextareaItem>

                </List>
                <Button type='primary' onClick={()=>{this.props.update(this.state)}}>保存</Button>
            </div>

        )
    }
}

export default GeniusInfo;