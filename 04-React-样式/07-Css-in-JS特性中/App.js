import React from 'react';
import './App.css'
import Home from './Component/Home'
import About from './Component/About'
import {ThemeProvider} from 'styled-components'

/*
1.设置主题
* */
class App extends React.Component{
    render(){
        return (
            <ThemeProvider theme={{size:'50px', color:'blue'}}>
                <Home></Home>
                <About></About>
            </ThemeProvider>
        );
    }
}
export default App;
