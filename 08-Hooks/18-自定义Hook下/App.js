import React, {createContext, useContext} from 'react';
/*
1.什么是自定义 Hook?
通过自定义 Hook，可以对其它Hook的代码进行复用

官方文档地址: https://react.docschina.org/docs/hooks-custom.html
* */
const UserContext = createContext({});
const InfoContext = createContext({});
function useGetContext() {
    // 在企业开发中, 但凡需要抽取代码, 但凡被抽取的代码中用到了其它的Hook,
    // 那么就必须把这些代码抽取到自定义Hook中
    const user = useContext(UserContext);
    const info = useContext(InfoContext);
    return [user, info]
}
function Home() {
    // const user = useContext(UserContext);
    // const info = useContext(InfoContext);
    const [user, info] = useGetContext();
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{info.gender}</p>
            <hr/>
        </div>
    )
}
function About() {
    // const user = useContext(UserContext);
    // const info = useContext(InfoContext);
    const [user, info] = useGetContext();
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{info.gender}</p>
            <hr/>
        </div>
    )
}
function App() {
    return (
        <UserContext.Provider value={{name:'lnj', age:18}}>
            <InfoContext.Provider value={{gender:'man'}}>
                <Home/>
                <About/>
            </InfoContext.Provider>
        </UserContext.Provider>
    )
}
export default App;
