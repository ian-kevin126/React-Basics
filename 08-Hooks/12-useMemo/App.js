import React, {useState, useMemo} from 'react';

/*
1.什么是useMemo Hook?
useMemo用于优化代码, 可以让对应的函数只有在依赖发生变化时才返回新的值
* */
// 定义一个函数, 模拟耗时耗性能操作
function calculate() {
    console.log('calculate被执行了');
    let total = 0;
    for(let i = 0; i < 999; i++){
        total += i;
    }
    return total;
}
function App() {
    console.log('App被渲染了');
    const [numState, setNumState] = useState(0);
    // const total = calculate();
    const total = useMemo(()=>{
        return calculate();
    }, []);
    return (
        <div>
            <p>{total}</p>
            <p>{numState}</p>
            <button onClick={()=>{setNumState(numState + 1)}}>增加</button>
        </div>
    )
}
export default App;
