import { takeEvery, put } from "redux-saga/effects";
import { Api } from '../apis/Api';

import { GET_YEAR_ROLLER, RETURN_YEAR_ROLLER, ERROR_YEAR_ROLLER, GET_OBJECTIVES, RETURN_OBJECTIVES, ERROR_OBJECTIVES } from '../store/actions/objectives';

export function* getYearRoller(params){
    // console.log('getYearRoller from saga');
    yield takeEvery(GET_YEAR_ROLLER, requestYearRoller);
}

function* requestYearRoller(params){
    try{
        // console.log(params);
        // yield call(delay, 2000);
        const data = yield Api.getYearRoller(params.params);
        // console.log(data.response);
        yield put({type:RETURN_YEAR_ROLLER, payload: data.response });
    }
    catch(error){
        console.log(error);
        yield put({type:ERROR_YEAR_ROLLER, payload: error });
    }
}
export function* getObjectives(params){
    // console.log('getObjectives from saga');
    yield takeEvery(GET_OBJECTIVES, requestObjectives);
}

function* requestObjectives(params){
    try{
        // console.log(params);
        // yield call(delay, 2000);
        const data = yield Api.getObjectives(params.params);
        // console.log(data);
        yield put({type:RETURN_OBJECTIVES, payload: data.response });
    }
    catch(error){
        console.log(error);
        yield put({type:ERROR_OBJECTIVES, payload: error });
    }
}