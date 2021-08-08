import React from 'react';
import styled from 'styled-components';

const StyleDiv = styled.div`
    p{
        font-size: ${props=>props.theme.size};
        color: ${props=>props.theme.color};
    }
`;

class Home extends React.Component{
    render() {
        return (
            <StyleDiv>
                <p>我是home段落</p>
            </StyleDiv>
        )
    }
}
export default Home;
