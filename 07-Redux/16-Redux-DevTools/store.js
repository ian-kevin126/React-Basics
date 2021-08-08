import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';
import reducer from './reducer';

/*
1.什么是Redux DevTools?
Redux DevTools是一款Redux官方提供的浏览器调试工具,
可以让我们很方便的对Redux保存的状态进行追踪调试
https://github.com/reduxjs/redux-devtools

2.如何使用Redux DevTools
- 在浏览器中安装Redux DevTools
- 添加Redux DevTools中间件配置
https://github.com/zalmoxisus/redux-devtools-extension
* */
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
