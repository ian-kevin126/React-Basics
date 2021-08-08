import React from 'react';
import store from './store/store';
import {addAction, subAction} from './store/action';
import Home from './components/Home'
import About from './components/About'

class App extends React.PureComponent{
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
                <button onClick={()=>{this.btnClick()}}>增加</button>
                <Home/>
                <About/>
            </div>
        )
    }
    btnClick(){
        store.dispatch(addAction(5));
    }
}

export default App;
