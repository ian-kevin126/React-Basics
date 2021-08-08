import React from 'react';

class About extends React.PureComponent{
    constructor(props){
        super(props);
        // console.log(this.props.match);
        console.log(this.props.match.params);
    }
    render(){
        return (
            <div>About</div>
        )
    }
}

export default About;
