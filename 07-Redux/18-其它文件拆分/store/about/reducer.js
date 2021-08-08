import {
    CHANGE_INFO
} from './constants';

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
export default aboutReducer;
