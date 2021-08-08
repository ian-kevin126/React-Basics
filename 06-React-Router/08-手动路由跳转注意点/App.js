import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Other from './components/Other'
import User from './components/User'
import Login from './components/Login'
import Discover from './components/Discover'
import {BrowserRouter, HashRouter, NavLink, Route, Switch, withRouter} from 'react-router-dom';

/*
1.手动路由跳转注意点:
- 只有通过路由创建出来的组件才有history对象, 所以不能在根组件中使用手动路由跳转
- 如果想在根组件中使用手动路由跳转, 那么需要借助一个withRouter高阶组件
* */
class App extends React.PureComponent{
    render(){
        return (
            <div>
                    <NavLink to={'/home'} activeStyle={{color:'red'}}>Home</NavLink>
                    <NavLink to={'/about'} activeStyle={{color:'red'}}>About</NavLink>
                    <NavLink to={'/user'} activeStyle={{color:'red'}}>User</NavLink>
                    <NavLink to={'/discover'} activeStyle={{color:'red'}}>广场</NavLink>
                    <button onClick={()=>{this.btnClick()}}>广场</button>

                    <Switch>
                        <Route exact path={'/home'} component={Home}/>
                        <Route exact path={'/about'} component={About}/>
                        <Route exact path={'/user'} component={User}/>
                        <Route exact path={'/login'} component={Login}/>
                        <Route path={'/discover'} component={Discover}/>
                        <Route component={Other}/>
                    </Switch>
            </div>
        )
    }
    btnClick(){
        // window.location.hash = '/discover';
        /*
        Cannot read property 'push' of undefined
        如果一个组件是通过路由创建的, 那么系统就会自动给这个组件传递一个history对象
        但是如果一个组件不是通过路由创建的, 那么系统就不会给这个组件传递一个history对象

        如果现在非路由创建出来的组件中使用history对象, 那么可以借助withRouter高阶组件
        只要把一个组件传递给withRouter方法, 那么这个方法就会通过路由将传入的组件创建出来

        注意点: 如果一个组件要使用路由创建, 那么这个组件必须包裹在BrowserRouter, HashRouter中
        * */
        this.props.history.push('/discover');
    }
}

export default withRouter(App);
