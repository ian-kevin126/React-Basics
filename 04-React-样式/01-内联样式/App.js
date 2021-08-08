import React from 'react';
import './App.css'
/*
1.React中的样式
React并没有像Vue那样提供特定的区域给我们编写CSS代码
所以你会发现在React代码中, CSS样式的写法千奇百怪

2.内联样式
- 内联样式的优点:
    + 内联样式, 样式之间不会有冲突
    + 可以动态获取当前state中的状态
- 内联样式的缺点：
    + 写法上都需要使用驼峰标识
    + 某些样式没有提示
    + 大量的样式, 代码混乱
    + 某些样式无法编写(比如伪类/伪元素)
* */
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: 'red'
        }
    }
    render(){
        return (
            <div>
                <p style={{fontSize:'50px', color: this.state.color}}>我是段落1</p>
                <p style={{fontSize:'50px', color:'green'}}>我是段落2</p>
                <button onClick={()=>{this.btnClick()}}>按钮</button>
            </div>
        );
    }
    btnClick(){
        this.setState({
            color: 'blue'
        })
    }
}
export default App;
