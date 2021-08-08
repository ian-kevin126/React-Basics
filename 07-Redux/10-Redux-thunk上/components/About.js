import React from 'react';
import { connect } from 'react-redux'
import {addAction, subAction, getUserInfo} from '../store/action';
/*
1.当前保存异步数据存在的问题
异步数据既然要保存到Redux中, 所以获取异步数据也应该是Redux的一部分
所以获取异步数据的代码应该放到Redux中, 而不是放到组件生命周期方法中
*/
/*
2.如何在Redux中获取网络数据?
使用redux-thunk中间件

3.redux-thunk作用?
默认情况下dispatch只能接收一个对象,
使用redux-thunk可以让dispatch除了可以接收一个对象以外, 还可以接收一个函数
是的通过dispatch派发一个函数的时候能够去执行这个函数, 而不是执行reducer函数
*/
/*
4.redux-thunk如何使用?
- 安装redux-thunk
npm install redux-thunk
- 在创建store时应用redux-thunk中间件
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
const storeEnhancer =  applyMiddleware(thunkMiddleware);
const store = createStore(reducer, storeEnhancer);
- 在action中获取网络数据
- 在组件中派发action

官方文档地址: https://www.redux.org.cn/docs/advanced/AsyncActions.html
* */
class About extends React.PureComponent{
    componentDidMount() {
        this.props.changeInfo();
    }

    render(){
        return (
            <div>
                <p>{this.props.count}</p>
                <button onClick={()=>{this.props.decrement()}}>递减</button>
                <p>{this.props.info.name}</p>
                <p>{this.props.info.age}</p>
            </div>
        )
    }
}
// 在mapStateToProps方法中告诉React-Redux, 需要将store中保存的哪些数据映射到当前组件的props上
const mapStateToProps = (state)=>{
    return {
        count: state.count,
        info: state.info
    }
};
// 在mapDispatchToProps方法中告诉React-Redux, 需要将哪些派发的任务映射到当前组件的props上
const mapDispatchToProps = (dispatch) =>{
    return {
        decrement(){
            dispatch(subAction(1));
        },
        changeInfo(info){
            // 注意点: 默认情况下dispatch方法只能接收一个对象
            //        如果想让dispatch方法除了可以接收一个对象以外, 还可以接收一个方法
            //        那么我们可以使用redux-thunk中间件
            // redux-thunk中间件作用:
            // 可以让dispatch方法可以接收一个函数, 可以让我们在通过dispatch派发任务的时候去执行我们传入的方法
            dispatch(getUserInfo);
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
