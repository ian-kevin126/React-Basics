import {
    ADD_COUNT,
    SUB_COUNT,
} from './constants';

// 利用action来修改状态
export const addAction = (num)=>{
    return {type:ADD_COUNT, num: num};
};
export const subAction = (num)=>{
    return {type:SUB_COUNT, num: num};
};
