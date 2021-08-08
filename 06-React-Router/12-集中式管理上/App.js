import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routers from './router/index';

/*
1.路由统一管理(路由集中管理)
现在虽然我们能通过路由实现组件切换, 但是现在我们的路由都比较分散, 不利于我们管理和维护
所以React也考虑到了这个问题, 也给我们提供了统一管理路由的方案
https://www.npmjs.com/package/react-router-config
* */
class App extends React.PureComponent{
    render(){
        let obj = {
            name:'lnj',
            age:18,
            gender:'man'
        };
        return (
            <div>
                <NavLink to={'/home?name=lnj&age=18'} activeStyle={{color:'red'}}>Home</NavLink>
                <NavLink to={'/about/lnj/18'} activeStyle={{color:'red'}}>About</NavLink>
                <NavLink to={{
                    pathname: "/user",
                    search: "",
                    hash: "",
                    state: obj
                }} activeStyle={{color:'red'}}>User</NavLink>
                <NavLink to={'/discover'} activeStyle={{color:'red'}}>广场</NavLink>
                <button onClick={()=>{this.btnClick()}}>广场</button>

                {/*
                <Switch>
                    <Route exact path={'/home'} component={Home}/>
                    <Route exact path={'/about/:name/:age'} component={About}/>
                    <Route exact path={'/user'} component={User}/>
                    <Route exact path={'/login'} component={Login}/>
                    <Route path={'/discover'} component={Discover}/>
                    <Route component={Other}/>
                </Switch>
                */}
                {renderRoutes(routers)}
            </div>
        )
    }
    btnClick(){
        this.props.history.push('/discover');
    }
}

export default withRouter(App);
