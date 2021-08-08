import React from 'react';
import {NavLink, Switch, Route} from "react-router-dom";
import {renderRoutes} from 'react-router-config';
import routers from '../router/index';

export function Hot() {
    return (
        <div>推荐</div>
    )
}
export function TopList() {
    return (
        <div>排行榜</div>
    )
}
export function PlayList() {
    return (
        <div>歌单</div>
    )
}

class Discover extends React.PureComponent{
    render(){
        return (
            <div id={'discover'}>
                <NavLink exact to={'/discover'} activeStyle={{color:'red'}}>推荐</NavLink>
                <NavLink exact to={'/discover/toplist'} activeStyle={{color:'red'}}>排行榜</NavLink>
                <NavLink exact to={'/discover/playlist'} activeStyle={{color:'red'}}>歌单</NavLink>
                <button onClick={()=>{this.btnClick()}}>歌单</button>

                {/*
                <Switch>
                    <Route exact path={'/discover'} component={Hot}/>
                    <Route exact path={'/discover/toplist'} component={TopList}/>
                    <Route exact path={'/discover/playlist'} component={PlayList}/>
                </Switch>
                */}
                {/*以下是2B铅笔写法, 企业开发中千万不要这么写*/}
                {/*{renderRoutes(routers[4].routes)}*/}
                {/*
                注意点: 如果当前组件是通过renderRoutes创建的, 那么系统过就会自动给这个组件传递一个route对象
                */}
                {renderRoutes(this.props.route.routes)}
            </div>
        )
    }
    btnClick(){
        // this.props.history.push('/discover/playlist');
        console.log(this.props.route);
    }
}

export default Discover;
