import React from 'react';
import store from '../store/store';
import {addAction, subAction} from '../store/action';

class About extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            count: store.getState().count
        }
    }
    componentDidMount() {
        store.subscribe(()=>{
            this.setState({
                count: store.getState().count
            })
        })
    }
    componentWillUnmount() {
        store.unsubscribe();
    }

    render(){
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={()=>{this.btnClick()}}>递减</button>
            </div>
        )
    }
    btnClick(){
        store.dispatch(subAction(1));
    }
}

export default About;
