import React, {useState, createRef, useRef, useEffect} from 'react';

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
    /*
    const pRef = createRef();
    // createRef和useRef区别:
    // useRef除了可以用来获取元素以外, 还可以用来保存数据
    const homeRef = useRef();
    function btnClick() {
        console.log(pRef); // {current: p}
        console.log(homeRef); // {current: Home}
    }
     */
    /*
    useState和useRef区别:
    useRef中保存的数据, 除非手动修改, 否则永远都不会发生变化
    * */
    const [numState, setNumState] = useState(0);
    // const age = useRef(18); // {current: 18}
    const age = useRef(numState); // {current: 0}
    useEffect(()=>{
        age.current = numState;
    }, [numState]);
    return (
        <div>
            {/*
            <p ref={pRef}>我是段落</p>
            <Home ref={homeRef}/>
            <About/>
            <button onClick={()=>{btnClick()}}>获取</button>
            */}
            <p>上一次的值: {age.current}</p>
            <p>当前的值  :{numState}</p>
            <button onClick={()=>{setNumState(numState + 1)}}>增加</button>
        </div>
    )
}
export default App;
