import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer';

// 创建store之前, 通过applyMiddleware方法, 告诉Redux需要应用哪些中间件
const storeEnhancer = applyMiddleware(thunkMiddleware);
// 利用store来保存状态（state）
const store = createStore(reducer, storeEnhancer);

export default store;
