import React, {useState, useEffect} from 'react';
/*
1.useEffect Hook对比类组件生命周期方法优势
易于拆分
* */
function Home() {
    const [nameState, setNameState] = useState('lnj');
    const [ageState, setAgeState] = useState(0);
    useEffect(()=>{
        // 组件被挂载
        console.log('修改DOM');
    });
    useEffect(()=>{
        // 组件被挂载
        console.log('注册监听');
        return ()=>{
            console.log('移出监听');
        }
    });
    useEffect(()=>{
        console.log('发送网络请求');
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
