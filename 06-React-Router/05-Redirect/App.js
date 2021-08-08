import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Other from './components/Other'
import User from './components/User'
import Login from './components/Login'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

/*
1.Redirect:
资源重定向, 也就是可以在访问某个资源地址的时候重定向到另外一个资源地址
例如: 访问/user 重定向到 /login
* */
class App extends React.PureComponent{
    render(){
        return (
            <div>
                <BrowserRouter>
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/user'}>User</Link>

                    <Switch>
                        <Route exact path={'/home'} component={Home}/>
                        <Route exact path={'/about'} component={About}/>
                        <Route exact path={'/user'} component={User}/>
                        <Route exact path={'/login'} component={Login}/>
                        <Route component={Other}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
