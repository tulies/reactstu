
const ADD_NUM = 'ADD_NUM';
const REDUCE_NUM = 'REDUCE_NUM';

const initState = {num:10};

// 这就是reducer处理函数，参数是状态和新的action
export const Counter = (state=initState, action)=>{
    switch(action.type) {
        case ADD_NUM:
            return {...state,num:state.num+1};
        case REDUCE_NUM:
            return {...state,num:state.num-1};
        default:
            return state;
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