import React from 'react';
import './App.css'
import Home from './Component/Home'
import About from './Component/About'
/*
1.CSS-in-JS
- 在React中, React认为结构和逻辑是密不可分的,所以在React中结构代码也是通过JS来编写的
  正是受到React这种思想的影响, 所以就有很多人开发了用JS来编写CSS的库
    + styled-components / emotion
- 利用JS来编写CSS, 可以让CSS具备样式嵌套、函数定义、逻辑复用、动态修改状态等特性
    + 也就是说, 从某种层面上, 提供了比过去Less/Scss更为强大的功能
    + 所以Css-in-JS, 在React中也是一种比较推荐的方式

2.styled-components使用
- 安装styled-components
  npm install styled-components --save
- 导入styled-components
  import styled from 'styled-components';
- 利用styled-components创建组件并设置样式
    styled.div`
      xxx:xxx
    `
* */
class App extends React.Component{
    render(){
        return (
            <div>
                <Home></Home>
                <About></About>
            </div>
        );
    }
}
export default App;
