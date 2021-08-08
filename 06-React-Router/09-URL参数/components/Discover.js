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
            <div>
                <NavLink exact to={'/discover'} activeStyle={{color:'red'}}>推荐</NavLink>
                <NavLink exact to={'/discover/toplist'} activeStyle={{color:'red'}}>排行榜</NavLink>
                <NavLink exact to={'/discover/playlist'} activeStyle={{color:'red'}}>歌单</NavLink>
                <button onClick={()=>{this.btnClick()}}>歌单</button>

                <Switch>
                    <Route exact path={'/discover'} component={Hot}/>
                    <Route exact path={'/discover/toplist'} component={TopList}/>
                    <Route exact path={'/discover/playlist'} component={PlayList}/>
                </Switch>
            </div>
        )
    }
    btnClick(){
        // 如果是Hash模式, 那么只需要通过JS设置Hash值即可
        // window.location.hash = '/discover/playlist';

        // 如果一个组件是通过路由创建出来的, 那么系统就会自动传递一个history给我们
        // 我们只需要拿到这个history对象, 调用这个对象的push方法, 通过push方法修改资源地址即可
        // console.log(this.props.history);
        this.props.history.push('/discover/playlist');
    }
}

export default Discover;
