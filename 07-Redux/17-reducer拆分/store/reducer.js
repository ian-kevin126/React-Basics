import {
    ADD_COUNT,
    SUB_COUNT,
    CHANGE_INFO
} from './constants';
import {addAction} from "./action";

/*
1.当前reducer存在的问题?
所有的操作都是在一个reducer中处理的, 如果项目很复杂, 那么会变得非常难以维护

2.如何解决?
对reducer进行拆分

官方文档地址: https://www.redux.org.cn/docs/recipes/StructuringReducers.html
* */
let initialHomeState = {
    count: 666
};
function homeReducer(homeState = initialHomeState, action) {
    switch (action.type) {
        case ADD_COUNT:
            return {...homeState ,count: homeState.count + action.num};
        case SUB_COUNT:
            return {...homeState ,count: homeState.count - action.num};
        default:
            return homeState;
    }
}

let initialAboutState = {
    info: {}
};
function aboutReducer(aboutState = initialAboutState, action) {
    switch (action.type) {
        case CHANGE_INFO:
            return {...aboutState ,info: action.info};
        default:
            return aboutState;
    }
}
function reducer(state = {}, action) {
    return {
        countData: homeReducer(state.countData, action),
        infoData: aboutReducer(state.infoData, action)
    }
}
export default reducer;
/*
// 定义一个状态
let initialState = {
    count: 666,
    info: {}
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
 */

