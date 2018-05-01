import React from 'react';
import { Route, Link, Redirect  } from 'react-router-dom';
import { connect} from 'react-redux'
import App from './App';
import { Button } from 'antd-mobile';
import { logout } from './reducers/Auth.reducer'
function Dh2() {
    return <h1>dh2</h1>;
}
function Dh3() {
    return <h1>dh3</h1>;
}

@connect(
    state=>state.Auth,
    {logout}
)
class Dashboard extends React.Component{
    render(){
        const redirectToLogin = <Redirect to="/login"></Redirect>
        const app = (
            <div>
                <Button onClick={this.props.logout}>Logout</Button>
                <ul>
                    <li><Link to="/dashboard/">导航1</Link></li>
                    <li><Link to="/dashboard/dh2">导航2</Link></li>
                    <li><Link to="/dashboard/dh3">导航3</Link></li>
                </ul>
                <hr/>
                <Route path="/dashboard/" exact component={App}/>
                <Route path="/dashboard/dh2" component={Dh2}/>
                <Route path="/dashboard/dh3" component={Dh3}/>
            </div>
        );
        return this.props.isAuth? app : redirectToLogin;
    }
}

export default Dashboard;