import homeReducer from './home/reducer';
import aboutReducer from './about/reducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({
    countData: homeReducer,
    infoData: aboutReducer
});

export default reducer;
