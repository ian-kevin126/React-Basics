import React from 'react';
import './Home.css'
class Home extends React.Component{
    render() {
        return (
            <div id={'home'}>
                <p>我是home段落</p>
                <a href={'www.it666.com'}>我是home超链接</a>
            </div>
        )
    }
}
export default Home;
