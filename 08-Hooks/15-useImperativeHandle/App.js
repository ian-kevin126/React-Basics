import React, {useRef, forwardRef, useImperativeHandle} from 'react';

/*
1.什么是useImperativeHandle Hook?
useImperativeHandle可以让你在使用 ref 时自定义暴露给父组件的实例值
* */
function Home(props, appRef) {
    const inputRef = useRef();
    useImperativeHandle(appRef, ()=>{
        return {
            myFocus: ()=>{
                inputRef.current.focus();
            }
        }
    });
    return (
        <div>
            <p>Home</p>
            <input ref={inputRef} type="text" placeholder={'请输入内容'}/>
        </div>
    )
}
const ForwardHome = forwardRef(Home);
function App() {
    const appRef = useRef();
    function btnClick() {
        // console.log(appRef);
        // console.log(appRef.current);
        // appRef.current.focus();
        // appRef.current.value = 'www.it666.com';
        appRef.current.myFocus();
    }
    return (
        <div>
            <ForwardHome ref={appRef}/>
            <button onClick={()=>{btnClick()}}>获取</button>
        </div>
    )
}
export default App;
