import React from 'react';
import './App.css'
import {CSSTransition, SwitchTransition} from 'react-transition-group';
/*
1.SwitchTransition
- SwitchTransition可以完成组件切换的动画
- SwitchTransition组件里面要有CSSTransition或者Transition组件，不能直接包裹你想要切换的组件
- SwitchTransition里面的CSSTransition或Transition组件不再像以前那样接受in属性来判断元素是何种状态，
  取而代之的是key属性
* */
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOn: true
        }
    }
    render(){
        return (
            <div>
                <SwitchTransition mode={'in-out'}>
                    <CSSTransition key={this.state.isOn}
                                   timeout={3000}
                                    classNames={'btn'}>
                        <button onClick={()=>{this.setState({isOn: !this.state.isOn})}}>{this.state.isOn ? 'on' : 'off'}</button>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        );
    }
}
export default App;
