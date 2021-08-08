import React from 'react';
import styled from 'styled-components';

// 注意点:
// 默认情况下在webstorm中编写styled-components的代码是没有任何的代码提示的
// 如果想有代码提示, 那么必须给webstorm安装一个插件
const StyleDiv = styled.div`
    p{
        font-size: 50px;
        color: red;
    }
    a{
       font-size: 25px;
       color: green;
    }
`;

class Home extends React.Component{
    render() {
        return (
            <StyleDiv>
                <p>我是home段落</p>
                <a href={'www.it666.com'}>我是home超链接</a>
            </StyleDiv>
        )
    }
}
export default Home;
