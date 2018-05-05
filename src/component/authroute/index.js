import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadData } from '../../reducers/user.reducer';

@withRouter
@connect(
    null,
    { loadData }
)
class AuthRoute extends React.Component{
    componentDidMount() {
        console.log('AuthRoute');
        const publicList = ['/login','/register'];
        const pathname = this.props.location.pathname;
        if (publicList.indexOf(pathname)>-1) {
            return null
        }
        axios.get('/user/info').then((resp)=>{
            console.log(resp);
            // this.setState({'data':resp.data});
            if(resp.status === 200 && resp.data.code === 0){
                this.props.loadData(resp.data.data)
            }else{
                this.props.history.push('/login');
            }
        }).catch((error)=>{
            console.log(error);
        });

        // this.props.getUserInfo();
    }
    // constructor(props){
    //     super(props);
    //     //查询用户信息
    //     // this.props.getUserInfo();
    //
    //     console.log('AuthRoute');
    //     const publicList = ['/login','/register'];
    //     const pathname = this.props.location.pathname;
    //     if (publicList.indexOf(pathname)>-1) {
    //         return null
    //     }
    //     axios.get('/user/info').then((resp)=>{
    //         console.log(resp);
    //         // this.setState({'data':resp.data});
    //         if(resp.status === 200 && resp.data.code === 0){
    //             this.props.loadData(resp.data.data)
    //         }else{
    //             this.props.history.push('/login');
    //         }
    //     }).catch((error)=>{
    //         console.log(error);
    //     });
    //
    // }
    render(){
        return null
    }

}
export default AuthRoute