import React from 'react';
import './App.css'
import {CSSTransition} from 'react-transition-group';
/*
1.React过渡动画
- 在React中我们可以通过原生的CSS来实现过渡动画，
  但是React社区为我们提供了react-transition-group帮助我们快速过渡动画
*/
/*
2.动画组件：
- Transition容器组件
    + 该组件是一个和平台无关的组件（不一定要结合CSS）；
    + 在前端开发中，我们一般是结合CSS来完成过渡，所以比较常用的是CSSTransition；
- CSSTransition容器组件
    + 在前端开发中，通常使用CSSTransition来完成过渡动画效果
- SwitchTransition容器组件
    + 两个组件显示和隐藏切换时，使用该组件
- TransitionGroup容器组件
    + 将多个动画组件包裹在其中，一般用于列表中元素的动画；
* */
/*
3.CSSTransition状态
- CSSTransition有三个状态：
    + appear: 初始
    + enter : 进入
    + exit；: 退出
- 当组件第一次加载时候会自动查找
    -appear / -appear-active / -appear-done
- 当组件显示时会自动查找
    -enter / -enter-active / -enter-done
- 当组件退出时会自动查找
    -exit / -exit-active / -exit-done
* */

/*
1.如何通过CSSTransition来实现过渡效果?
1.1安装react-transition-group
npm install react-transition-group --save
1.2从安装好的库中导入CSSTransition
import {CSSTransition} from 'react-transition-group';
1.3利用CSSTransition将需要执行过渡效果的组件或元素包裹起来
1.4编写对应的CSS动画
实现: .-enter / .-enter-active / .-enter-done
1.5给CSSTransition添加一些属性
in属性        :
取值是一个布尔值, 如果取值为false表示触发退出动画, 如果取值是true表示触发进入动画
classNames属性:
指定动画类名的前缀
timeout属性   :
设置动画超时时间
* */
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isShow: false
        }
    }
    render(){
        return (
            <div>
                <CSSTransition in={this.state.isShow}
                                classNames={'box'}
                                timeout={3000}>
                    <div></div>
                </CSSTransition>
                <button onClick={()=>{this.btnClick()}}>显示</button>
            </div>
        );
    }
    btnClick(){
        this.setState({
            isShow: true
        })
    }
}
export default App;
