import axios from 'axios';
import { getRedirectPath } from '../util'

const AUTH_SUCCESS = 'AUTH_SUCCESS';
const USER_DATE = 'USER_DATE';
const ERROR_MSG = 'ERROR_MSG';
const LOGOUT = 'LOGOUT';

const initState = {
    uname: '',
    upass:'',
    type:'',
    msg:'',
    hasAuthed:false
};

// 这就是reducer处理函数，参数是状态和新的action
export const User = (state=initState, action)=>{
    switch(action.type) {
        case AUTH_SUCCESS:
            return { ...state, msg: '', redirectTo: getRedirectPath(action.payload), ...action.payload, hasAuthed: true};

        case USER_DATE:
            return { ...state, ...action.payload, hasAuthed: true};
        case ERROR_MSG:
            return { ...state, ...action.payload, hasAuthed: true};
        case LOGOUT:
            return { ...initState, hasAuthed: true };
        default:
            return state;
    }
};

const errorMsg = (msg)=>{
    return {type: ERROR_MSG, payload:{msg:msg}};
};
export const loadData = (userinfo)=>{
    console.log(userinfo);
    return { type:USER_DATE, payload:userinfo };
};

// 获取用户信息
export const getUserInfo = ()=>{
    return dispatch=>{
        axios.get('/user/userinfo').then((resp)=>{
            console.log(resp);
            // this.setState({'data':resp.data});
            if(resp.status === 200 && resp.data.code === 0){
                dispatch({type: USER_DATE, payload:resp.data})
            }

        }).catch((error)=>{
            console.log(error);
        });
    }
};

// 注销
export const logout = ()=>{
    return { type:LOGOUT }
};
// 登录
export const login = ({uname, upass})=>{
    if (!uname || !upass) {
        return errorMsg('用户密码必须输入');
    }
    return dispatch=>{
        axios.post('/user/login',{uname, upass}).then((resp)=>{
            console.log(resp);
            // this.setState({'data':resp.data});
            if(resp.status === 200 && resp.data.code === 0){
                dispatch({type: AUTH_SUCCESS, payload:resp.data.data})
            }else{
                dispatch(errorMsg(resp.data.msg));
            }
        }).catch((error)=>{
            console.log(error);
        });
    }
};
// 注册
export const register = ({uname, upass, type})=>{
    if (!uname || !upass) {
        return errorMsg('用户密码必须输入');
    }
    return dispatch=>{
        axios.post('/user/register',{uname, upass, type}).then((resp)=>{
            console.log(resp);
            // this.setState({'data':resp.data});
            if(resp.status === 200 && resp.data.code === 0){
                dispatch({type: AUTH_SUCCESS, payload:{uname, upass, type}});
            }else{
                dispatch(errorMsg(resp.data.msg));
            }
        }).catch((error)=>{
            console.log(error);
        });
    }
};
// 更新
export const update = (data)=>{
    return dispatch=>{
        axios.post('/user/update',data).then((resp)=>{
            console.log(resp);
            // this.setState({'data':resp.data});
            if(resp.status === 200 && resp.data.code === 0){
                dispatch({type: AUTH_SUCCESS, payload:resp.data.data});
            }else{
                dispatch(errorMsg(resp.data.msg));
            }
        }).catch((error)=>{
            console.log(error);
        });
    }
};



