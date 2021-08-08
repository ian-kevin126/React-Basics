const redux = require('redux');

// 定义一个状态
let initialState = {
    count: 0
};

// 利用store来保存状态（state）
const store = redux.createStore(reducer);

// 利用action来修改状态
const addAction = {type:'ADD_COUNT', num: 1};
const subAction = {type:'SUB_COUNT', num: 1};
const getUserInfo = (dispatch, getState)=>{
    setTimeout(()=>{
        console.log('获取到了异步数据');
        dispatch(addAction);
    }, 3000);
};

// 利用reducer将store和action串联起来
function reducer(state = initialState, action) {
    console.log('reducer被执行了');
    switch (action.type) {
        case 'ADD_COUNT':
            return {count: state.count + action.num};
        case 'SUB_COUNT':
            return {count: state.count - action.num};
        default:
            return state;
    }
}

// 在组件中如何修改Store中存储的状态？
/*
console.log('执行reducer之前做的事情');
store.dispatch(addAction);

console.log('执行reducer之前做的事情');
store.dispatch(subAction);
 */

/*
在redux-thunk中, 如果通过dispatch派发的任务是一个对象, 那么就立即执行reducer
                如果通过dispatch派发的任务是一个函数, 那么就执行这个函数
* */
/*
function thunkDispatch(action) {
    // console.log('执行reducer之前做的事情');
    // store.dispatch(action);
    if(typeof action === 'function'){
        action(store.dispatch, store.getState);
    }else{
        store.dispatch(action);
    }
}

// thunkDispatch(addAction);
thunkDispatch(getUserInfo);
 */
function thunkDispath(store) {
    const storeDispath = store.dispatch;
    const storeGetState = store.getState;

    function myDispatch(action) {
        if(typeof action === 'function'){
            action(storeDispath, storeGetState);
        }else{
            storeDispath(action);
        }
    }
    // 将官方的dispatch函数修改为我们自定义的dispatch函数
    store.dispatch = myDispatch;
}

thunkDispath(store);

// 调用的实际是我们自定义的dispatch函数
// store.dispatch(addAction);
store.dispatch(getUserInfo);
