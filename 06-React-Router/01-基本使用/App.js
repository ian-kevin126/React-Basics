import React from 'react';
import Home from './components/Home'
import About from './components/About'
import {BrowserRouter, HashRouter, Link, Route} from 'react-router-dom';

/*
1.什么是路由?
- 路由维护了URL地址和组件的映射关系, 通过这个映射关系,
  我们就可以根据不同的URL地址，去渲染不同的组件
*/
/*
2.如何在React中使用路由
- 安装react-router
npm install react-router-dom
- 通过指定监听模式
    + BrowserRouter history模式 http://www.it666.com/home
    + HashRouter hash模式 http://www.it666.com/#/home
- 通过Link修改路由URL地址
- 通过Route匹配路由地址

官网文档地址: https://reactrouter.com/web/guides/quick-start
* */
class App extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            flag: true
        }
    }
    render(){
        // 需求: 界面上有两个按钮, 点击不同按钮显示不同组件
        return (
            <div>
                {/*
                1.BrowserRouter和HashRouter作用:
                指定路由的监听模式 history模式 / hash模式
                http://www.it666.com
                http://www.it666.com/home     history模式
                http://www.it666.com/#/home   hash模式
                */}
                <HashRouter>
                    {/*
                    2.Link作用:
                    用于修改URL的资源地址
                    */}
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    {/*
                    3.Route作用:
                    用于维护URL和组件的关系
                    Route是一个占用组件, 将来它会根据匹配到的资源地址渲染对应的组件
                    */}
                    <Route path={'/home'} component={Home}/>
                    <Route path={'/about'} component={About}/>
                </HashRouter>
                {/*
                <div>
                    <button onClick={()=>{this.btnClick(true)}}>Home</button>
                    <button onClick={()=>{this.btnClick(false)}}>About</button>
                </div>
                {this.state.flag ? <Home/> : <About/>}
                */}
            </div>
        )
    }
    btnClick(flag){
        this.setState({
            flag:flag
        })
    }
}

export default App;
