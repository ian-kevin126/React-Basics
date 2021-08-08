import React, {useRef, useState, useEffect, useLayoutEffect} from 'react';
import './app.css'
/*
1.什么是useLayoutEffect Hook?
- 大部分情况下useLayoutEffect和useEffect没太大区别(用法格式都相同)
- 但是如果需要修改DOM的布局样式, 那么推荐使用useLayoutEffect

2.为什么推荐在useLayoutEffect中修改DOM的布局样式?
- useEffect 函数会在组件渲染到屏幕之后才执行, 所以会可能会出现闪屏情况
- useLayoutEffect 函数是在组件渲染到屏幕之前执行, 所以不会出现闪屏情况
* */
function Home() {
    /*
    useEffect和useLayoutEffect区别:
    执行时机不同:
    如果是挂载或者更新组件, 那么useLayoutEffect会比useEffect先执行
    如果是卸载组件, 那么useEffect会比useLayoutEffect先执行
    useEffect: 同步
    useLayoutEffect: 异步

    什么时候使用useEffect?
    在绝大多数的情况下能用useEffect, 就用useEffect

    什么时候用useLayoutEffect?
    只有在需要组件挂载之后更新DOM的布局和样式的时候才使用useLayoutEffect

    为什么要使用useLayoutEffect来更新DOM布局和样式?
    useEffect是组件已经渲染到屏幕上了才执行
    useLayoutEffect是组件还没有渲染到屏幕上就会执行
    所以如果在组件已经渲染到屏幕上了, 才去更新DOM的布局和样式, 那么用户体验不好, 会看到闪屏的情况
    而如果是在组件还没有渲染到屏幕上, 就去更新DOM的布局和样式, 那么用户体验更好, 看不到闪屏情况
    * */
    const pRef = useRef();
    // useEffect(()=>{
    //     // console.log('组件被挂载或更新完成 - useEffect');
    //     pRef.current.style.left = '0px';
    //     pRef.current.style.left = '500px';
    //
    //     return ()=>{
    //         console.log('组件即将被卸载 - useEffect');
    //     }
    // });
    useLayoutEffect(()=>{
        // console.log('组件被挂载或更新完成 - useLayoutEffect');
        pRef.current.style.left = '0px';
        pRef.current.style.left = '500px';

        return ()=>{
            console.log('组件即将被卸载 - useLayoutEffect');
        }
    });
    return (
        <div>
            <p ref={pRef}></p>
        </div>
    )
}
function App() {
    const [show, setShow] = useState(true);
    return (
        <div>
            {show && <Home/>}
            <button onClick={()=>{setShow(!show)}}>切换</button>
        </div>
    )
}
export default App;
