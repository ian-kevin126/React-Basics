import {
    ADD_COUNT,
    SUB_COUNT,
} from './constants';

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
export default homeReducer;
