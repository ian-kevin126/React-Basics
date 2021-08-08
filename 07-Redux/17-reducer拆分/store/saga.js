import {takeEvery, put} from 'redux-saga/effects'
import {GET_USER_INFO} from './constants';
import {changeAction} from './action';

function *myHandler() {
    // 获取网络数据
    const data = yield fetch('http://127.0.0.1:7001/info')
        .then((response)=>{
            return response.json();
        })
        .catch((error)=>{
            console.log(error);
        });
    yield put(changeAction(data));
}
function *mySaga() {
    yield takeEvery(GET_USER_INFO, myHandler)
}
export default mySaga;
