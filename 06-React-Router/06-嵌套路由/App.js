import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Other from './components/Other'
import User from './components/User'
import Login from './components/Login'
import Discover from './components/Discover'
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';

/*
1.嵌套路由(子路由):
路由里面又有路由, 我们就称之为嵌套路由
* */
class App extends React.PureComponent{
    render(){
        return (
            <div>
                <BrowserRouter>
                    <NavLink to={'/home'} activeStyle={{color:'red'}}>Home</NavLink>
                    <NavLink to={'/about'} activeStyle={{color:'red'}}>About</NavLink>
                    <NavLink to={'/user'} activeStyle={{color:'red'}}>User</NavLink>
                    <NavLink to={'/discover'} activeStyle={{color:'red'}}>广场</NavLink>

                    <Switch>
                        <Route exact path={'/home'} component={Home}/>
                        <Route exact path={'/about'} component={About}/>
                        <Route exact path={'/user'} component={User}/>
                        <Route exact path={'/login'} component={Login}/>
                        {/*
                        注意点:如果要使用嵌套路由, 那么外层路由不能添加精准匹配exact
                        /discover/toplist
                        /discover
                        */}
                        <Route path={'/discover'} component={Discover}/>
                        <Route component={Other}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
