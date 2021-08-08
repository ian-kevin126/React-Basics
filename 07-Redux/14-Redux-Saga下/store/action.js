import {
    ADD_COUNT,
    SUB_COUNT,
    CHANGE_INFO,
    GET_USER_INFO
} from './constants';

// 利用action来修改状态
export const addAction = (num)=>{
    return {type:ADD_COUNT, num: num};
};
export const subAction = (num)=>{
    return {type:SUB_COUNT, num: num};
};
export const changeAction = (info)=>{
    return {type:CHANGE_INFO, info: info};
};
export const getUserInfo = () =>{
    return {type:GET_USER_INFO}
}
/*
export const getUserInfo = (dispatch, getState) =>{
    fetch('http://127.0.0.1:7001/info')
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            // console.log('在action中获取到的网络数据', data);
            dispatch(changeAction(data));
        })
        .catch((error)=>{
            console.log(error);
        })
};
 */
