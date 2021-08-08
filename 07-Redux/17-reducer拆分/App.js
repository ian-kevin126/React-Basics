import React from 'react';
import Home from './components/Home'
import About from './components/About'

class App extends React.PureComponent{
    render(){
        return (
            <div>
                <Home/>
                <About/>
            </div>
        )
    }
}
export default App;
