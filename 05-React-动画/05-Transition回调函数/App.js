import React from 'react';
import './App.css'
import {CSSTransition} from 'react-transition-group';
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
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isShow: true
        }
    }
    render(){
        return (
            <div>
                {/*
                生命周期方法
                onEnter/onEntering/onEntered
                onExit/onExiting/onExited
                */}
                <CSSTransition in={this.state.isShow}
                                classNames={'box'}
                                timeout={3000}
                                unmountOnExit={true}
                                appear
                                onEnter = {this.myFn}
                               onEntering={()=>{console.log('进入动画执行过程中');}}
                               onEntered={()=>{console.log('进入动画执行完毕');}}
                >
                    <div className={'box'}></div>
                </CSSTransition>
                <button onClick={()=>{this.btnClick1()}}>显示</button>
                <button onClick={()=>{this.btnClick2()}}>隐藏</button>
            </div>
        );
    }
    myFn(currentEl, isAppear){
        // console.log(currentEl, isAppear);
        console.log('进入动画开始之前');
    }
    btnClick1(){
        this.setState({
            isShow: true
        })
    }
    btnClick2(){
        this.setState({
            isShow: false
        })
    }
}
export default App;
