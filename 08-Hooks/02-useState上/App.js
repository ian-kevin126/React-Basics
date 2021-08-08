import React, {useState} from 'react';
/*
1.什么是Hook?
Hook就是一个特殊的函数

2.什么是useState Hook?
可以让函数式组件保存自己状态的函数

3.useState Hook如何使用?
- Hook只能在函数式组件中使用, 并且只能在函数体的最外层使用


* */
function App() {
    /*
    useState:
    参数: 保证状态的初始值
    返回值: 是一个数组, 这个数组中有两个元素
           第一个元素: 保存的状态
           第二个元素: 修改保存状态的方法
    * */
    const arr = useState(666);
    const [state, setState] = arr;
    return (
        <div>
            <p>{state}</p>
            <button onClick={()=>{setState(state + 1)}}>增加</button>
            <button onClick={()=>{setState(state - 1)}}>减少</button>
        </div>
    )
}
export default App;
