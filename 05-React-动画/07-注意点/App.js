import React from 'react';
import './App.css'
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // heroList : ['鲁班', '鲁班', '鲁班']
            heroList:[
                {id:1, name:'鲁班'},
                {id:2, name:'虞姬'},
                {id:3, name:'黄忠'},
            ]
        }
    }
    render(){
        return (
            <div>
                <ul>
                    <TransitionGroup>
                    {
                        /*
                        注意点:
                        在企业开发中一定要保证CSSTransition key的唯一性
                        * */
                        this.state.heroList.map((obj, index) =>{
                            return (
                                <CSSTransition key={obj.id}
                                               timeout={3000}
                                               classNames={'item'}>
                                    <li onClick={()=>{this.removeHero(index)}}>{obj.name}</li>
                                </CSSTransition>
                            )
                        })
                    }
                    </TransitionGroup>
                </ul>
                <button onClick={()=>{this.btnClick()}}>新增</button>
            </div>
        );
    }
    btnClick(){
        this.setState({
            // heroList: [...this.state.heroList, '阿珂']
            heroList: [...this.state.heroList, {id: this.state.heroList.length + 1, name:'阿珂'}]
        })
    }
    removeHero(index){
        // console.log(index);
        const list = this.state.heroList.filter((name, idx) =>{
            return idx !== index;
        })
        // console.log(list);
        this.setState({
            heroList: list
        })
    }
}
export default App;
