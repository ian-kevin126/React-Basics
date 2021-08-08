import React, {useState, memo, useCallback, useMemo} from 'react';

/*
1.什么是useMemo Hook?
useMemo用于优化代码, 可以让对应的函数只有在依赖发生变化时才返回新的值
* */
function Home(props) {
    console.log('Home被渲染了');
    return (
        <div>
            <p>Home</p>
            <button onClick={()=>{props.handler()}}>增加</button>
        </div>
    )
}
function About(props) {
    console.log('About被渲染了');
    return (
        <div>
            <p>About</p>
            <button onClick={()=>{props.handler()}}>减少</button>
        </div>
    )
}

const MemoHome = memo(Home);
const MemoAbout = memo(About);

function App() {
    console.log('App被渲染了');
    const [numState, setNumState] = useState(0);
    const [countState, setCountState] = useState(0);
    function increment() {
        setNumState(numState + 1);
    }
    // 以下代码的作用: 只要countState没有发生变化, 那么useCallback返回的永远都是同一个函数
    /*
    function useCallback(fn, arr){
        return useMemo(()=>{
            return fn;
        }, arr);
    }
    * */
    /*
    const decrement = useCallback(()=>{
        setCountState(countState - 1);
    }, [countState]);
     */
    // 以下代码的作用: 只要countState没有发生变化, 那么useMemo返回的永远都是同一个值
    const decrement = useMemo(()=>{
        return ()=>{
            setCountState(countState - 1);
        };
    }, [countState]);
    return (
        <div>
            <p>numState = {numState}</p>
            <p>countState = {countState}</p>
            <MemoHome handler={increment}/>
            <MemoAbout handler={decrement}/>
        </div>
    )
}
export default App;
