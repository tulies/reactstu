import axios from 'axios'

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const USER_DATE = 'USER_DATE';
const initState = {
    name: '王嘉炀',
    age:'18',
    isAuth: false
};

// 这就是reducer处理函数，参数是状态和新的action
export const Auth = (state=initState, action)=>{
    switch(action.type) {
        case LOGIN:
            return {...initState,isAuth:true};
        case LOGOUT:
            return {...initState,isAuth:false};
        case USER_DATE:
            return {...initState, ...action.payload}
        default:
            return state;
    }
};


export const getUserInfo = ()=>{
    return dispatch=>{
        axios.get('/data').then((resp)=>{
            console.log(resp);
            // this.setState({'data':resp.data});
            dispatch(userData(resp.data))

        }).catch((error)=>{
            console.log(error);
        });
    }
};




export const login = ()=>{
    return {type: LOGIN};
};
export const logout = ()=>{
    return {type: LOGOUT};
};

export const userData = (data)=>{
    return {type: USER_DATE, payload:data};
};