import React from 'react';
import store from './store/store';
import {addAction, subAction} from './store/action';
import Home from './components/Home'
import About from './components/About'
/*
1.当前使用Redux存在的问题
- 冗余代码太多, 每次使用都需要在构造函数中获取
              每次使用都需要监听和取消监听
- 操作store的代码过于分散

2.如何解决冗余代码太多问题?
使用React-Redux

3.什么是React-Redux
React-Redux是Redux官方的绑定库,能够让我们在组件中更好的读取和操作Redux保存的状态
https://react-redux.js.org/introduction/quick-start
* */
class App extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            count: store.getState().count
        }
    }
    componentDidMount() {
        store.subscribe(()=>{
            this.setState({
                count: store.getState().count
            })
        })
    }
    componentWillUnmount() {
        store.unsubscribe();
    }

    render(){
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={()=>{this.btnClick()}}>增加</button>
                <Home/>
                <About/>
            </div>
        )
    }
    btnClick(){
        store.dispatch(addAction(5));
    }
}

export default App;
