const ADD_NUM = 'ADD_NUM';
const REMOVE_NUM = 'REMOVE_NUM';
const initState = 10;
export const counter = (state=initState, action)=>{
    console.log(state, action);
    switch(action.type) {
        case ADD_NUM:
            return state+1;
        case REMOVE_NUM:
            return state-1;
        default:
            return 10;
    }
};
export const addNum = ()=>{
    return {type: ADD_NUM}
};

export const removeNum = ()=>{
    return {type: REMOVE_NUM}
};

export const addNumAsync = ()=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(addNum())
        },2000);
    }
};
