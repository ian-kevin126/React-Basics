import React from 'react';

class Home extends React.PureComponent{
    constructor(props){
        super(props);
        // console.log(this.props.location);
        // console.log(this.props.location.search);
        let query = this.props.location.search.substring(1);
        query = query.split('&');
        let obj = {};
        query.forEach((item)=>{
            // name=lnj  [name, lnj]
            let temp = item.split('=');
            obj[temp[0]] = temp[1];
        });
        console.log(obj);
    }
    render(){
        return (
            <div>Home</div>
        )
    }
}

export default Home;
