import React from 'react';
import './App.css'
import Home from './Component/Home'
import About from './Component/About'
/*
1.外链样式
将CSS代码写到一个单独的CSS文件中, 在使用的时候导入进来
- 外链样式的优点:
    + 编写简单, 有代码提示, 支持所有CSS语法
- 外链样式的缺点：
    + 不可以动态获取当前state中的状态
    + 属于全局的css，样式之间会相互影响
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
