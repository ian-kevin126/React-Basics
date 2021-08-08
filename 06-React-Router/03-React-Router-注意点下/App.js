import React from 'react';
import Home from './components/Home'
import About from './components/About'
import {BrowserRouter, Link, Route, NavLink} from 'react-router-dom';

/*
2.Route注意点
- 默认情况下Route在匹配资源地址时, 是模糊匹配
  如果必须和资源地址一模一样才匹配, 那么需要添加exact属性, 开启精准匹配
* */
/*
3.Link注意点
- 默认情况下Link会渲染成一个a标签, 如果想渲染成其他的元素, 可以通过手动路由跳转来实现
* */
/*
4.NavLink注意点
- 默认情况下NavLink在匹配资源地址时, 是模糊匹配
  如果必须和资源地址一模一样才匹配, 那么需要添加exact属性, 开启精准匹配
* */
class App extends React.PureComponent{
    render(){
        return (
            <div>
                <BrowserRouter>
                    {/*
                    Link注意点:
                    默认情况下Link会渲染成一个a标签,
                    如果想渲染成其他的元素, 可以通过手动路由跳转来实现
                    */}
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/home/about'}>About</Link>
                    {/*
                    NavLink注意点:
                    NavLink在匹配路由的时候, 是利用当前资源地址从左至右的和path中的地址进行匹配的
                    只要当前资源地址从左至右完整的包含了path中的地址那么就认为匹配
                    当前资源地址 : /home/about
                    to中的地址: /home
                    to中的地址: /home/about
                    */}
                    {/*
                    <NavLink exact to={'/home'} activeStyle={{color:'red'}}>Home</NavLink>
                    <NavLink exact to={'/home/about'} activeStyle={{color:'red'}}>About</NavLink>
                    */}
                    {/*
                    Route注意点:
                    Route在匹配路由的时候, 是利用当前资源地址从左至右的和path中的地址进行匹配的
                    只要当前资源地址从左至右完整的包含了path中的地址那么就认为匹配
                    当前资源地址 : /home/about
                    path中的地址: /home
                    path中的地址: /home/about
                    */}
                    <Route exact path={'/home'} component={Home}/>
                    <Route exact path={'/home/about'} component={About}/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
