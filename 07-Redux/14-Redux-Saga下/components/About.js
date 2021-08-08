import React from 'react';
import { connect } from 'react-redux'
import {addAction, subAction, getUserInfo} from '../store/action';
class About extends React.PureComponent{
    componentDidMount() {
        this.props.changeInfo();
        this.props.changeInfo();
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
        changeInfo(){
            // redux-thunk中间件作用:
            // 可以让dispatch方法可以接收一个函数, 可以让我们在通过dispatch派发任务的时候去执行我们传入的方法
            dispatch(getUserInfo());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
