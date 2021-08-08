import React from 'react';

/*
1.Redux三大原则
- 单一数据源
    + 整个应用程序的state只存储在一个 store 中
    + Redux并没有强制让我们不能创建多个Store，但是那样做并不利于数据的维护
    + 单一的数据源可以让整个应用程序的state变得方便维护、追踪、修改

- State是只读的
    + 唯一修改State的方法一定是触发action，不要试图在其他地方通过任何的方式来修改State
    + 这样就确保了View或网络请求都不能直接修改state，它们只能通过action来描述自己想要如何修改stat；
    + 这样可以保证所有的修改都被集中化处理，并且按照严格的顺序来执行，所以不需要担心race condition（竟态）的问题；

- 使用纯函数来执行修改
    + 通过reducer将 旧state和 action联系在一起，并且返回一个新的State：
    + 随着应用程序的复杂度增加，我们可以将reducer拆分成多个小的reducers，分别操作不同state tree的一部分
    + 但是所有的reducer都应该是纯函数，不能产生任何的副作用

2.什么是纯函数？
- 返回结果只依赖于它的参数，并且在执行过程里面没有副作用

// 纯函数
function sum(num1, num2){
    return num1 + num2;
}

// 非纯函数
let num1 = 10;
function sum(num2){
    return num1 + num2;
}

// 纯函数
const num1 = 10;
function sum(num2){
    return num1 + num2;
}

官方文档： https://www.redux.org.cn/docs/introduction/ThreePrinciples.html
* */
class App extends React.PureComponent{
    render(){
        return (
            <div></div>
        )
    }
}

export default App;
