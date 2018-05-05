import React from 'react';

import { connect } from 'react-redux';
import { getUserList } from '../../reducers/chatuser.reducer'

import UserCard from '../../component/usercard';

@connect(
    state=>state.ChatUser,
    {getUserList}

)
class Boss extends React.Component{
    constructor(props){
        super(props);
        this.props.getUserList("genius");
    }
    render(){
        return <UserCard userlist={this.props.userlist}></UserCard>
    }
}
export default Boss;