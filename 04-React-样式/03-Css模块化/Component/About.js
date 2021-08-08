import React from 'react';
// import './About.css'
import AboutStyle from './About.module.css';

class Home extends React.Component{
    render() {
        return (
            <div>
                <p className={AboutStyle.title}>我是home段落</p>
                <a href={'www.it666.com'} className={AboutStyle.link}>我是home超链接</a>
            </div>
        )
    }
}
export default Home;
