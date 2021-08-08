import {
    CHANGE_INFO,
    GET_USER_INFO
} from './constants';

export const changeAction = (info)=>{
    return {type:CHANGE_INFO, info: info};
};
export const getUserInfo = () =>{
    return {type:GET_USER_INFO}
}
