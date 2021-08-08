import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Other from './components/Other'
import User from './components/User'
import Login from './components/Login'
import Discover from './components/Discover'
import {NavLink, Route, Switch, withRouter} from 'react-router-dom';

/*
1.路由参数传递
- URL参数
?key=value&key=value
- 路由参数(动态路由)
/path/:key
- 对象
https://reactrouter.com/web/api/Link
* */
class App extends React.PureComponent{
    render(){
        return (
            <div>
                <NavLink to={'/home?name=lnj&age=18'} activeStyle={{color:'red'}}>Home</NavLink>
                <NavLink to={'/about/lnj/18'} activeStyle={{color:'red'}}>About</NavLink>
                <NavLink to={'/user'} activeStyle={{color:'red'}}>User</NavLink>
                <NavLink to={'/discover'} activeStyle={{color:'red'}}>广场</NavLink>
                <button onClick={()=>{this.btnClick()}}>广场</button>

                <Switch>
                    <Route exact path={'/home'} component={Home}/>
                    <Route exact path={'/about/:name/:age'} component={About}/>
                    <Route exact path={'/user'} component={User}/>
                    <Route exact path={'/login'} component={Login}/>
                    <Route path={'/discover'} component={Discover}/>
                    <Route component={Other}/>
                </Switch>
            </div>
        )
    }
    btnClick(){
        this.props.history.push('/discover');
    }
}

export default withRouter(App);
