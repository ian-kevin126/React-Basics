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
            <p>{props.user.name}</p>
            <p>{props.user.age}</p>
        </div>
    )
}

const MemoHome = memo(Home);
const MemoAbout = memo(About);

function App() {
    console.log('App被渲染了');
    const [numState, setNumState] = useState(0);
    function increment() {
        setNumState(numState + 1);
    }
    /*
    // 以下代码的作用: 只要countState没有发生变化, 那么useMemo返回的永远都是同一个'函数'
    const decrement = useCallback(()=>{
        setCountState(countState - 1);
    }, [countState]);
    * */
    /*
    // 以下代码的作用: 只要countState没有发生变化, 那么useMemo返回的永远都是同一个'值'
    // useCallback和useMemo区别:
    // useCallback返回的永远是一个函数
    // useMemo返回的是return返回的内容
    const decrement = useMemo(()=>{
        return ()=>{
            setCountState(countState - 1);
        };
    }, [countState]);
     */
    // const user = {name: 'lnj', age:18};
    const user = useMemo(()=>{
        return {name: 'lnj', age:18};
    }, []);
    return (
        <div>
            <p>numState = {numState}</p>
            <MemoHome handler={increment}/>
            <MemoAbout user={user}/>
        </div>
    )
}
export default App;
