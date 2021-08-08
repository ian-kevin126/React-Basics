import React from 'react';
import styled from 'styled-components';
/*
1.styled-components特性
- props
- attrs
* */
const StyleDiv = styled.div`
    p{
        font-size: 50px;
        color: ${props => props.color};
    }
    a{
       font-size: 25px;
       color: green;
    }
`;
// 注意点:
// 调用完attrs方法之后, 这个方法返回的还是一个函数
// 所以我们还可以继续通过字符串模板来调用
const StyleInput = styled.input.attrs({
    type:'password'
})``

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: 'red'
        }
    }
    render() {
        return (
            <StyleDiv color={this.state.color}>
                <p>我是home段落</p>
                <a href={'www.it666.com'}>我是home超链接</a>
                <button onClick={()=>{this.btnClick()}}>按钮</button>
                {/*
                <StyleInput type={'password'}></StyleInput>
                */}
                <StyleInput></StyleInput>
            </StyleDiv>
        )
    }
    btnClick(){
        this.setState({
            color: 'green'
        })
    }
}
export default Home;
