
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const initState = {
    user: '王嘉炀',
    isAuth: false
};

// 这就是reducer处理函数，参数是状态和新的action
export const Auth = (state=initState, action)=>{
    switch(action.type) {
        case LOGIN:
            return {...initState,isAuth:true};
        case LOGOUT:
            return {...initState,isAuth:false};
        default:
            return state;
    }
};
export const login = ()=>{
    return {type: LOGIN};
};
export const logout = ()=>{
    return {type: LOGOUT};
};