import React, {useState, useReducer} from 'react';
/*
1.什么是useReducer Hook?
从名称来看, 很多人会误以为useReducer是用来替代Redux的, 但是其实不是
useReducer是useState的一种替代方案, 可以让我们很好的复用操作数据的逻辑代码
* */
function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return {...state, num: state.num + 1};
        case 'SUB':
            return {...state, num: state.num - 1};
        default:
            return state;
    }
}
function Home() {
    /*
    const [numState, setNumState] = useState(0);
    function increment() {
        setNumState(numState + 1);
    }
    function decrement() {
        setNumState(numState - 1);
    }
     */
    /*
    useReducer接收的参数:
    第一个参数: 处理数据的函数
    第二个参数: 保存的默认值
    useReducer返回值:
    会返回一个数组, 这个数组中有两个元素
    第一个元素: 保存的数据
    第二个元素: dispatch函数
    * */
    const [state, dispatch] = useReducer(reducer, {num: 0});
    return (
        <div>
            <p>{state.num}</p>
            <button onClick={()=>{dispatch({type:'ADD'})}}>增加</button>
            <button onClick={()=>{dispatch({type:'SUB'})}}>减少</button>
        </div>
    )
}
function About() {
    // 注意点: 不同组件中的useState保存的状态是相互独立的, 是相互不影响的
    /*
    const [numState, setNumState] = useState(5);
    function increment() {
        setNumState(numState + 1);
    }
    function decrement() {
        setNumState(numState - 1);
    }
     */
    const [state, dispatch] = useReducer(reducer, {num: 5});
    return (
        <div>
            <p>{state.num}</p>
            <button onClick={()=>{dispatch({type:'ADD'})}}>增加</button>
            <button onClick={()=>{dispatch({type:'SUB'})}}>减少</button>
        </div>
    )
}
function App() {
    return (
        <div>
            <Home/>
            <About/>
        </div>
        )
}
export default App;
