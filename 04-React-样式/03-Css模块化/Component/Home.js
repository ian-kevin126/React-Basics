import React from 'react';
// import './Home.css'
import HomeStyle from './Home.module.css'

class Home extends React.Component{
    render() {
        return (
            <div>
                <p className={HomeStyle.title}>我是home段落</p>
                <a href={'www.it666.com'} className={HomeStyle.link}>我是home超链接</a>
            </div>
        )
    }
}
export default Home;
