import React, {createRef, useRef} from 'react';

/*
1.什么是useRef Hook?
useRef就是createRef的Hook版本, 只不过比createRef更强大一点
* */
class Home extends React.PureComponent{
    render() {
        return (
            <div>Home</div>
        )
    }
}
function About() {
    return (
        <div>About</div>
    )
}
function App() {
    // const pRef = createRef();
    // const homeRef = createRef();
    const pRef = useRef();
    const homeRef = useRef();
    function btnClick() {
        console.log(pRef.current);
        console.log(homeRef.current);
    }
    return (
        <div>
            <p ref={pRef}>我是段落</p>
            <Home ref={homeRef}/>
            <About/>
            <button onClick={()=>{btnClick()}}>获取</button>
        </div>
    )
}
export default App;
