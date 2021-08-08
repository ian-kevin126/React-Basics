import React from 'react';
import Home from './components/Home'
import About from './components/About'
import {BrowserRouter, HashRouter, Link, Route} from 'react-router-dom';

/*
1.React路由注意点
- react-router4之前, 所有路由代码都是统一放到react-router中管理的
- react-router4开始, 拆分为了两个包react-router-dom和react-router-native
    + react-router-dom 在浏览器中使用路由
    + react-router-native 在原生应用中使用路由

- BrowserRouter history模式使用的是H5的特性, 所以兼容性会比HashRouter hash模式差一些
- 在企业开发中如果不需要兼容低级版本浏览器, 建议使用BrowserRouter
            如果需要兼容低级版本浏览器, 那么只能使用HashRouter

- 无论是Link还是Route都只能放到BrowserRouter和HashRouter中才有效
*/
class App extends React.PureComponent{
    render(){
        return (
            <div>
                {/*设置监听模式*/}
                <BrowserRouter>
                    {/*修改路由地址*/}
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    {/*维护URL和组件关系*/}
                    <Route path={'/home'} component={Home}/>
                    <Route path={'/about'} component={About}/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
