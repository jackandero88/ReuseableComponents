import { takeEvery, put } from "redux-saga/effects";
// import { getUserInfo } from "../actions/user";
import { Api } from '../apis/Api';
import * as SharedStorage from "./../storage/SharedStorage";
import { GET_JUDGEMENT_INFO, RETURN_JUDGEMENT_INFO, ERROR_JUDGEMENT_INFO } from '../actions/judgements';

export function* getJudgementInfo(){
    console.log('getJudgementInfo from saga');
    yield takeEvery(GET_JUDGEMENT_INFO, requestJudgementInfo);
}

function* requestJudgementInfo(){
    try{
        // yield call(delay, 2000);
        const data = yield Api.getJudgementColorsFromApi();
         console.log(data);
        SharedStorage.storeUserID(data.response.uuid);
        yield put({type:RETURN_JUDGEMENT_INFO, payload: data.response });
    }
    catch(error){
        console.log(error);
        yield put({type:ERROR_JUDGEMENT_INFO, payload: error });
    }
}