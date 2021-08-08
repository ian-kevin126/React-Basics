import React from 'react';
import './App.css'
import styled from 'styled-components';

/*
1.React过渡动画
- 在React中我们可以通过原生的CSS来实现过渡动画，
  但是React社区为我们提供了react-transition-group帮助我们快速过渡动画
*/
/*
2.动画组件：
- Transition
    + 该组件是一个和平台无关的组件（不一定要结合CSS）；
    + 在前端开发中，我们一般是结合CSS来完成样式，所以比较常用的是CSSTransition；
- CSSTransition
    + 在前端开发中，通常使用CSSTransition来完成过渡动画效果
- SwitchTransition
    + 两个组件显示和隐藏切换时，使用该组件
- TransitionGroup
    + 将多个动画组件包裹在其中，一般用于列表中元素的动画；
* */

const StyleDiv  = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background: skyblue;
  opacity: ${props => props.opacity};
  transition: all 3s;
`
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            width: 0,
            height: 0,
            opacity:0
        }
    }
    render(){
        return (
            <div>
                <StyleDiv {...this.state}></StyleDiv>
                <button onClick={()=>{this.btnClick()}}>按钮</button>
            </div>
        );
    }
    btnClick(){
        this.setState({
            width: '100px',
            height: '100px',
            opacity:1
        })
    }
}
export default App;
