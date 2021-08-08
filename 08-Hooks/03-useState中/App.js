import React, {useState} from 'react';
function App() {
    /*
    useState:
    参数: 保证状态的初始值
    返回值: 是一个数组, 这个数组中有两个元素
           第一个元素: 保存的状态
           第二个元素: 修改保存状态的方法
    * */
    // const arr = useState(666);
    // const [state, setState] = arr;

    // 注意点: 在同一个函数式组件中, 是可以多次使用同名的Hook的
    const [ageState, setAgeState] = useState(18);
    const [nameState, setNameState] = useState('lnj');
    const [studentState, setStudentState] = useState({name:'zs', age:23});
    const [heroState, setHeroState] = useState([
        {id: 1, name:'鲁班'},
        {id: 1, name:'虞姬'},
        {id: 1, name:'黄忠'},
    ]);

    return (
        <div>
            <p>{ageState}</p>
            <button onClick={()=>{setAgeState(ageState + 1)}}>增加</button>
            <button onClick={()=>{setAgeState(ageState - 1)}}>减少</button>
            <hr/>
            <p>{nameState}</p>
            <button onClick={()=>{setNameState('it666')}}>修改</button>
            <hr/>
            <p>{studentState.name}</p>
            <p>{studentState.age}</p>
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
