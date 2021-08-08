import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Other from './components/Other'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

/*
1.Switch:
默认情况下路由会从上至下匹配所有的Route, 只要匹配都会显示
但是在企业开发中大部分情况下, 我们希望的是一旦有一个匹配到了后续就不要再匹配了
此时我们就可以通过Switch来实现
* */
class App extends React.PureComponent{
    render(){
        return (
            <div>
                <BrowserRouter>
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/about'}>About</Link>

                    <Switch>
                        <Route exact path={'/home'} component={Home}/>
                        <Route exact path={'/about'} component={About}/>
                        {/*如果Route没有指定path, 那么表示这个Route和所有的资源地址都匹配*/}
                        <Route component={Other}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
