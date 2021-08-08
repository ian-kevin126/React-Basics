import React, {createContext, useContext} from 'react';
/*
1.什么是useContext Hook?
useContext相当于 类组件中的 static contextType = Context
* */
const UserContext = createContext({});
const ColorContext = createContext({});

// const {Provider, Consumer} = UserContext;
function Home() {
    const user = useContext(UserContext);
    const color = useContext(ColorContext);
    return (
        /*
        <UserContext.Consumer>
            {
                value1 =>{
                    return (
                        <ColorContext.Consumer>
                            {
                                value2 =>{
                                    return (
                                        <div>
                                            <p>{value1.name}</p>
                                            <p>{value1.age}</p>
                                            <p>{value2.color}</p>
                                        </div>
                                    )
                                }
                            }
                        </ColorContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
         */
        /*
        <div>
            <p>{this.context.name}</p>
            <p>{this.context.age}</p>
        </div>
         */
        <div>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{color.color}</p>
        </div>
    )
}
// Home.contextType = UserContext;
function App() {
    return (
        <UserContext.Provider value={{name:'lnj', age:18}}>
            <ColorContext.Provider value={{color:'red'}}>
                <Home/>
            </ColorContext.Provider>
        </UserContext.Provider>
        )
}
export default App;
