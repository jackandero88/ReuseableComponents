import { takeEvery, put } from "redux-saga/effects";
import { Api } from '../apis/Api';
import * as SharedStorage from "./../storage/SharedStorage";
import { GET_USER_INFO, RETURN_USER_INFO, ERROR_USER_INFO } from '../store/actions/user';

export function* getUserInfo(){
    console.log('getUserInfo from saga');
    yield takeEvery(GET_USER_INFO, requestUserInfo);
}

function* requestUserInfo(){
    try{
        // yield call(delay, 2000);
        const data = yield Api.getUserAuthInfo();
        // console.log(data);
        SharedStorage.storeUserID(data.response.uuid);
        yield put({type:RETURN_USER_INFO, payload: data.response });
    }
    catch(error){
        console.log(error);
        yield put({type:ERROR_USER_INFO, payload: error });
    }
}