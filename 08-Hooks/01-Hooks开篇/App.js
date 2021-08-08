import React from 'react';
/*
1.什么是Hook?
- Hook 是 React 16.8 的新增特性，
  它可以让函数式组件拥有类组件特性

2.为什么需要Hook?
- 在Hook出现之前, 如果我们想在组件中保存自己的状态,
  如果我们想在组件的某个生命周期中做一些事情, 那么我们必须使用类组件
    + 但是类组件的学习成本是比较高的, 你必须懂得ES6的class, 你必须懂得箭头函数
    + 但是在类组件的同一个生命周期方法中, 我们可能会编写很多不同的业务逻辑代码
      这样就导致了大量不同的业务逻辑代码混杂到一个方法中, 导致代码变得很难以维护
      (诸如: 在组件被挂载的生命周期中, 可能主要注册监听, 可能需要发送网络请求等)
    + 但是在类组件中共享数据是非常繁琐的, 需要借助Context或者Redux等
- 所以当应用程序变得复杂时, 类组件就会变得非常复杂, 非常难以维护
- 所以Hook就是为了解决以上问题而生的

3.如何使用Hook?
- Hook的使用我们无需额外安装任何第三方库, 因为它就是React的一部分
- Hook只能在函数组件中使用, 不能在类组件，或者函数组件之外的地方使用
- Hook只能在函数最外层调用, 不要在循环、条件判断或者子函数中调用

官方文档地址: https://react.docschina.org/docs/hooks-intro.html
* */
function Home() {
    // 只能在函数体的最外层使用
    // 只能在这个地方使用Hook
    if(){
        // 不能使用Hook
    }
    while (){
        // 不能使用Hook
    }
    for(){
        // 不能使用Hook
    }
    switch () {
        // 不能使用Hook
    }
    function demo() {
        // 不能使用Hook
    }
}
class App extends React.PureComponent{
    render(){
        return (
            <div>APP</div>
        )
    }
}
export default App;
