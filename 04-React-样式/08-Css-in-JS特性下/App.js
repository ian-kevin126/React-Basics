import React from 'react';
import './App.css'
import styled from 'styled-components'

/*
1.继承
https://styled-components.com/docs
* */
/*
const StyleDiv1 = styled.div`
  font-size: 100px;
  color: red;
  background: blue;
`;
const StyleDiv2 = styled.div`
  font-size: 100px;
  color: green;
  background: blue;
`;
 */
const BaseDiv = styled.div`
  font-size: 100px;
  background: blue;
`;
const StyleDiv1 = styled(BaseDiv)`
  color: red;
`;
const StyleDiv2 = styled(BaseDiv)`
  color: green;
`;
class App extends React.Component{
    render(){
        return (
            <div>
                <StyleDiv1>我是div1</StyleDiv1>
                <StyleDiv2>我是div2</StyleDiv2>
            </div>
        );
    }
}
export default App;
