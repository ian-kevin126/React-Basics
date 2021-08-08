import {
    ADD_COUNT,
    SUB_COUNT,
    CHANGE_INFO
} from './constants';
import {combineReducers} from 'redux';

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

/*
1.为什么Redux中的处理函数叫做reducer?
因为在数组中有一个叫做reducer函数, 这个函数的特点是: 会将上一次的返回结果作为下一次的参数
同理在Redux中这个处理函数也会将上一次的返回结果作为下一次的参数, 所以就叫做reducer

2.如何合并拆分之后的reducer?
- 手动合并(2B)
- 通过Redux提供的合并函数来合并

3.当前Redux存在的其它问题?

* */
/*
function reducer(state = {}, action) {
    return {
        countData: homeReducer(state.countData, action),
        infoData: aboutReducer(state.infoData, action)
    }
}
 */
const reducer2 = combineReducers({
    countData: homeReducer,
    infoData: aboutReducer
});

export default reducer2;
