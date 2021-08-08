import React from 'react';

/*
1.什么是Redux？
Redux是一个管理状态（数据）的容器，提供了可预测的状态管理

2.什么是可预测的状态管理？
数据 在什么时候， 因为什么， 发生了什么改变，都是可以控制和追踪的， 我们就称之为预测的状态管理

3.为什么要使用Redux？
- React是通过数据驱动界面更新的，React负责更新界面， 而我们负责管理数据
- 默认情况下我们可以在每个组件中管理自己的状态， 但是现在前端应用程序已经变得越来越复杂
  状态之间可能存在依赖关系（父子、共享等），一个状态的变化会引起另一个状态的变化
- 所以当应用程序复杂的时候， 状态在什么时候改变，因为什么改变，发生了什么改变，就会变得非常难以控制和追踪
- 所以当应用程序复杂的时候，我们想很好的管理、维护、追踪、控制状态时， 我们就需要使用Redux

4.Redux核心理念
- 通过store来保存数据
- 通过action来修改数据
- 通过reducer将store和action串联起来

                    -------------
        --------->  | Component |  ---------
       |            -------------           |
       |                                    ↓
-------------       -------------       -------------
|   Store   | <---- |  Reducer  | <---- |  Action   |
-------------       -------------       -------------


const initialState = {
   heroes:[
     {name:'鲁班'， age:18},
     {name:'虞姬'， age:22},
   ]
}

const action = {type:'CHANGE_NAME', playload:{index:0, newName:'黄忠'}}
const action = {type:'CHANGE_AGE', playload:{index:1, newAge:66}}

function reducer(state = initialState, action){
    switch(action.type){
        case: 'CHANGE_NAME':
            // 修改姓名
            return newState;
        case: 'CHANGE_AGE':
             // 修改年龄
            return newState;
    }
}

官方文档： https://www.redux.org.cn/docs/introduction/CoreConcepts.html
* */
class App extends React.PureComponent{
    render(){
        return (
            <div></div>
        )
    }
}

export default App;
