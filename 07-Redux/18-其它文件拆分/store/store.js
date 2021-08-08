import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';
import reducer from './reducer';

// 通过createSagaMiddleware方法创建saga中间件对象
const sagaMiddleware = createSagaMiddleware();
// 创建store之前, 通过applyMiddleware方法, 告诉Redux需要应用哪些中间件
const storeEnhancer = applyMiddleware(sagaMiddleware);
// 进行Redux DevTools配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose;

// 利用store来保存状态（state）
const store = createStore(reducer, composeEnhancers(storeEnhancer));
// 我们可以利用传入的生成器告诉redux-saga, 需要拦截哪些dispatch派发的action
sagaMiddleware.run(mySaga);

export default store;
