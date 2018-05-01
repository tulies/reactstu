
const ADD_NUM = 'ADD_NUM';
const REDUCE_NUM = 'REDUCE_NUM';

const initState = 10;

// 这就是reducer处理函数，参数是状态和新的action
export const counter = (state=initState, action)=>{
    switch(action.type) {
        case ADD_NUM:
            return state+1;
        case REDUCE_NUM:
            return state-1;
        default:
            return initState;
    }
};

export const addNum = ()=>{
    return {type: ADD_NUM};
};
export const reduceNum = ()=>{
    return {type: REDUCE_NUM};
};
// 异步加数字
export const addNumAsync = ()=> {
    return dispatch => {
        setTimeout(()=>{
            dispatch(addNum());
        },2000);
    }
};