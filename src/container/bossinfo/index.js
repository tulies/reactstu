import React from 'react';
import { List, Button, TextareaItem, InputItem, NavBar } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { update } from '../../reducers/user.reducer'
import AvatarSelector from '../../component/avatar-selector'

@connect(
    state=>state.User,
    { update }
)
class BossInfo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title:'',
            desc:'',
            company:'',
            money:'',
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
        return (
            <div>
                { (redirect && redirect !== path) ? <Redirect to={redirect} />:null }
                <NavBar>BOSS完善信息页</NavBar>
                <List>
                    <AvatarSelector selectAvatar={(img)=>this.selectAvatar(img)}></AvatarSelector>
                    <InputItem onChange={v=>this.handleChange('title',v)}>招聘职位</InputItem>
                    <InputItem onChange={v=>this.handleChange('company',v)}>公司名称</InputItem>
                    <InputItem onChange={v=>this.handleChange('money',v)}>职位薪资</InputItem>
                    <TextareaItem
                        title='职位要求'
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

export default BossInfo;