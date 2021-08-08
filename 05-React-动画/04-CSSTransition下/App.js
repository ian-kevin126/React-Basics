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
                <CSSTransition in={this.state.isShow}
                                classNames={'box'}
                                timeout={3000}
                                unmountOnExit={true}
                                appear>
                    <div className={'box'}></div>
                </CSSTransition>
                <button onClick={()=>{this.btnClick1()}}>显示</button>
                <button onClick={()=>{this.btnClick2()}}>隐藏</button>
            </div>
        );
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
