import ReactDOM from 'react-dom';
import React from 'react';
import store from '../store/store';

function connect(mapStateToProps, mapDispatchToProps) {
    return function enhanceComponent(WrappedComponent) {
        class AdvComponent extends React.PureComponent{
            constructor(props){
                super(props);
                this.state = {
                    storeState : {...mapStateToProps(store.getState())}
                }
            }
            componentDidMount() {
                store.subscribe(()=>{
                    this.setState({
                        storeState: {...mapStateToProps(store.getState())}
                    })
                })
            }
            componentWillUnmount() {
                store.unsubscribe();
            }
            render() {
                return (<WrappedComponent {...this.props}
                                          {...mapStateToProps(store.getState())}
                                          {...mapDispatchToProps(store.dispatch)}/>)
            }
        }
        return AdvComponent;
    }
}
export default connect;
