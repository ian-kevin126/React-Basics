import React from 'react';
import {NavLink, Switch, Route} from "react-router-dom";

function Hot() {
    return (
        <div>推荐</div>
    )
}
function TopList() {
    return (
        <div>排行榜</div>
    )
}
function PlayList() {
    return (
        <div>歌单</div>
    )
}
class Discover extends React.PureComponent{
    render(){
        return (
            /*
            注意点: 由于当前组件是在BrowserRouter or HashRouter中显示的
                   所以在当前组件中不用使用BrowserRouter or HashRouter来包裹NavLink/Switch/Route
            * */
            <div>
                <NavLink exact to={'/discover'} activeStyle={{color:'red'}}>推荐</NavLink>
                <NavLink exact to={'/discover/toplist'} activeStyle={{color:'red'}}>排行榜</NavLink>
                <NavLink exact to={'/discover/playlist'} activeStyle={{color:'red'}}>歌单</NavLink>

                <Switch>
                    <Route exact path={'/discover'} component={Hot}/>
                    <Route exact path={'/discover/toplist'} component={TopList}/>
                    <Route exact path={'/discover/playlist'} component={PlayList}/>
                </Switch>
            </div>
        )
    }
}

export default Discover;
