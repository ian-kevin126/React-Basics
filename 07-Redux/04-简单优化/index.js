const redux = require('redux');
/*
当前代码存在的问题：
1.store、action、reducer代码都写在一个文件中， 不利于维护
2.action和reducer中都是使用字符串来指定和判断操作类型， 写错不报错
3.action中的操作写死了， 不够灵活
  ... ...
* */
const ADD_COUNT = 'ADD_COUNT';
const SUB_COUNT = 'SUB_COUNT';
// 定义一个状态
let initialState = {
    count: 0
};

// 利用store来保存状态（state）
const store = redux.createStore(reducer);

// 利用action来修改状态
// const addAction = {type:ADD_COUNT, num: 1};
// const subAction = {type:SUB_COUNT, num: -1};
const addAction = (num)=>{
    return {type:ADD_COUNT, num: num};
};
const subAction = (num)=>{
    return {type:SUB_COUNT, num: num};
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

// 在组件中如何监听状态的改变？
store.subscribe((a)=>{
    console.log(store.getState());
});

// 在组件中如何从Store中获取存储的状态？
console.log(store.getState());

// 在组件中如何修改Store中存储的状态？
// store.dispatch(addAction(5));
store.dispatch(subAction(5));

// console.log(store.getState());

