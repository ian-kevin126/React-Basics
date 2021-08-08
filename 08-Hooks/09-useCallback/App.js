import React, {useState, memo, useCallback} from 'react';

/*
1.什么是useCallback Hook?
useCallback用于优化代码, 可以让对应的函数只有在依赖发生变化时才重新定义
* */
/*
当前Home和About重新渲染的原因是因为
父组件中的数据发生了变化, 会重新渲染父组件
重新渲染父组件, 就会重新执行父组件函数
重新执行父组件函数, 就会重新定义increment/decrement
既然increment/decrement是重新定义的, 所以就和上一次的不是同一个函数了
既然不是同一个函数, 所以Home和About接收到的内容也和上一次的不一样了
既然接收到的内容和上一次不一样了, 所以就会重新渲染
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
    // function decrement() {
    //     setCountState(countState - 1);
    // }
    // 以下代码的作用: 只要countState没有发生变化, 那么useCallback返回的永远都是同一个函数
    const decrement = useCallback(()=>{
        setCountState(countState - 1);
    }, [countState]);
    return (
        <div>
            <p>numState = {numState}</p>
            <p>countState = {countState}</p>
            {/*<button onClick={()=>{increment()}}>增加</button>*/}
            {/*<button onClick={()=>{decrement()}}>减少</button>*/}
            <MemoHome handler={increment}/>
            <MemoAbout handler={decrement}/>
        </div>
    )
}
export default App;
