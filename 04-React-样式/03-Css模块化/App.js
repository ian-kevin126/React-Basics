import React from 'react';
import './App.css'
import Home from './Component/Home'
import About from './Component/About'
/*
1.Css Module
- React的脚手架已经内置了css modules的配置：
    + .css/.less/.scss 等样式文件都修改成 .module.css/.module.less/.module.scss 等；
- Css Modules优点
    + 编写简单, 有代码提示, 支持所有CSS语法
    + 解决了全局样式相互污染问题
- Css Modules缺点
    + 不可以动态获取当前state中的状态
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
