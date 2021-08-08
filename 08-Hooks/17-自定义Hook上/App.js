import React, {useEffect, useState} from 'react';
import './app.css'
/*
1.什么是自定义 Hook?
通过自定义 Hook，可以对其它Hook的代码进行复用

官方文档地址: https://react.docschina.org/docs/hooks-custom.html
* */

/*
注意点: 在React中只有两个地方可以使用Hook
       - 函数式组件中
       - 自定义Hook中
如何自定义一个Hooks
只要在函数名称前面加上use, 那么就表示这个函数是一个自定义Hook, 就表示可以在这个函数中使用其它的Hook
* */
function useAddListenr(name) {
    useEffect(()=>{
        console.log(name, ' - 组件被挂载或者更新完成 -- 添加监听');
        return ()=>{
            console.log(name, ' - 组件即将被卸载 -- 移出监听');
        }
    });
}
function Home() {
    /*
    useEffect(()=>{
        console.log('Home - 组件被挂载或者更新完成 -- 添加监听');
        return ()=>{
            console.log('Home - 组件即将被卸载 -- 移出监听');
        }
    });
     */
    useAddListenr('Home');
    return (
        <div>Home</div>
    )
}
function About() {
    /*
    useEffect(()=>{
        console.log('About - 组件被挂载或者更新完成 -- 添加监听');
        return ()=>{
            console.log('About - 组件即将被卸载 -- 移出监听');
        }
    });
     */
    useAddListenr('About');
    return (
        <div>About</div>
    )
}
function App() {
    const [show, setShow] = useState(true);
    return (
        <div>
            {show && <Home/>}
            {show && <About/>}
            <button onClick={()=>{setShow(!show)}}>切换</button>
        </div>
    )
}
export default App;
