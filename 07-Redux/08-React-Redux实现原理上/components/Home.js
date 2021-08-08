import React from 'react';
// import { connect } from 'react-redux'
import connect from '../connect/connect';

import {addAction, subAction} from '../store/action';

class Home extends React.PureComponent{
    render(){
        return (
            <div>
                <p>{this.props.count}</p>
                <button onClick={()=>{this.props.increment()}}>递增</button>
            </div>
        )
    }
}
// 在mapStateToProps方法中告诉React-Redux, 需要将store中保存的哪些数据映射到当前组件的props上
const mapStateToProps = (state)=>{
    return {
        count: state.count
    }
};
// 在mapDispatchToProps方法中告诉React-Redux, 需要将哪些派发的任务映射到当前组件的props上
const mapDispatchToProps = (dispatch) =>{
    return {
        increment(){
            dispatch(addAction(1));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
