import {
    ADD_COUNT,
    SUB_COUNT,
    CHANGE_INFO
} from './constants';

// 定义一个状态
let initialState = {
    count: 666,
    info: {},
    name:'',
    age:''
};

// 利用reducer将store和action串联起来
function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COUNT:
            return {...state ,count: state.count + action.num};
        case SUB_COUNT:
            return {...state ,count: state.count - action.num};
        case CHANGE_INFO:
            return {...state ,info: action.info};
        default:
            return state;
    }
}

export default reducer;
