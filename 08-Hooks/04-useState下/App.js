import React, {useState} from 'react';
function App() {
    /*
    useState注意点:
    和类组件中的setState一样
    * */
    const [ageState, setAgeState] = useState(18);
    const [nameState, setNameState] = useState('lnj');
    const [studentState, setStudentState] = useState({name:'zs', age:23});
    const [heroState, setHeroState] = useState([
        {id: 1, name:'鲁班'},
        {id: 1, name:'虞姬'},
        {id: 1, name:'黄忠'},
    ]);
    function incrementAge() {
        // setAgeState(ageState + 10);
        // setAgeState(ageState + 10);
        // setAgeState(ageState + 10);

        setAgeState((preAgeState)=>preAgeState + 10);
        setAgeState((preAgeState)=>preAgeState + 10);
        setAgeState((preAgeState)=>preAgeState + 10);
    }
    function changeName() {
        // studentState.name = 'it666';
        setStudentState({...studentState, name:'it666'});
    }
    return (
        <div>
            <p>{ageState}</p>
            <button onClick={()=>{incrementAge()}}>增加</button>
            <button onClick={()=>{setAgeState(ageState - 1)}}>减少</button>
            <hr/>
            <p>{nameState}</p>
            <button onClick={()=>{setNameState('it666')}}>修改</button>
            <hr/>
            <p>{studentState.name}</p>
            <p>{studentState.age}</p>
            <button onClick={()=>{changeName()}}>修改</button>
            <hr/>
            <ul>{
                heroState.map((hero)=>{
                    return <li>{hero.name}</li>
                })
            }</ul>
        </div>
    )
}
export default App;
