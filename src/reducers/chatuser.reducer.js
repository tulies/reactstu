import axios from 'axios';

const USER_LIST = 'USER_LIST';
const initState = {
    userlist:[]
};
// 这就是reducer处理函数，参数是状态和新的action
export const ChatUser = (state=initState, action)=>{
    switch(action.type) {
        case USER_LIST:
            return {...state, userlist: action.payload};
        default:
            return state;
    }
};

export const getUserList = type=>{
    return dispatch=>{
        axios.get('/user/list?type='+type)
            .then(res=>{
                if (res.data.code === 0){
                    dispatch({type: USER_LIST, payload: res.data.data });
                }
            });
    }
};
