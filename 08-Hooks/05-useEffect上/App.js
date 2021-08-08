import React, {useState, useEffect} from 'react';
/*
1.什么是useEffect Hook?
可以把 useEffect Hook 看做
componentDidMount，componentDidUpdate 和 componentWillUnmount
这三个生命周期函数的组合

2.useEffect Hook特点?
可以设置依赖, 只有依赖发生变化的时候才执行
* */
function Home() {
    const [nameState, setNameState] = useState('lnj');
    const [ageState, setAgeState] = useState(0);
    useEffect(()=>{
        // componentDidMount
        // componentDidUpdate
        console.log('组件被挂载或者组件更新完成');
        return ()=>{
            // componentWillUnmount
            console.log('组件即将被卸载');
        }
    });
    return (
        <div>
            <p>{nameState}</p>
            <button onClick={()=>{setNameState('it666')}}>修改</button>
            <p>{ageState}</p>
            <button onClick={()=>{setAgeState(ageState + 1)}}>增加</button>
            <button onClick={()=>{setAgeState(ageState - 1)}}>减少</button>
            <hr/>
        </div>
    )
}
function App() {
    const [isShowState, setIsShowState] = useState(true);
    return (
        <div>
            {isShowState && <Home/>}
            <button onClick={()=>{setIsShowState(!isShowState)}}>切换</button>
        </div>
        )
}
export default App;
