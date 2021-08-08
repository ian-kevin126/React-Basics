const redux = require('redux');

// 定义一个状态
let initialState = {
    count: 0
};

// 利用store来保存状态（state）
const store = redux.createStore(reducer);

// 利用action来修改状态
const addAction = {type:'ADD_COUNT', num: 1};
const subAction = {type:'SUB_COUNT', num: -1};

// 利用reducer将store和action串联起来
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_COUNT':
            return {count: state.count + action.num};
        case 'SUB_COUNT':
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
store.dispatch(addAction);

// console.log(store.getState());

