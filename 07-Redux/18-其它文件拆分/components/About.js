import React from 'react';
import { connect } from 'react-redux'
import { getUserInfo } from '../store/action';
class About extends React.PureComponent{
    componentDidMount() {
        this.props.changeInfo();
    }
    render(){
        return (
            <div>
                <p>{this.props.info.name}</p>
                <p>{this.props.info.age}</p>
            </div>
        )
    }
}
// 在mapStateToProps方法中告诉React-Redux, 需要将store中保存的哪些数据映射到当前组件的props上
const mapStateToProps = (state)=>{
    return {
        info: state.infoData.info
    }
};
// 在mapDispatchToProps方法中告诉React-Redux, 需要将哪些派发的任务映射到当前组件的props上
const mapDispatchToProps = (dispatch) =>{
    return {
        changeInfo(){
            dispatch(getUserInfo());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
