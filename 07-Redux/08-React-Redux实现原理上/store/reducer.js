import {
    ADD_COUNT,
    SUB_COUNT
} from './constants';

// 定义一个状态
let initialState = {
    count: 666
};

// 利用reducer将store和action串联起来
function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COUNT:
            return {count: state.count + action.num};
        case SUB_COUNT:
            return {count: state.count - action.num};
        default:
            return state;
    }
}

export default reducer;
