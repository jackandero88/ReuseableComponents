import { take, put, call } from "redux-saga/effects";
import { delay } from "redux-saga";
import { Api } from '../apis/Api';

import { REQUEST_TRACKERS, RECEIVE_TRACKERS, ERROR_TRACKERS } from "../store/actions/trackers";

// import myTrackerData from '../data/myTrackers';

export function* getTrackers(){
    // console.log('getMyTracker');
    yield take(REQUEST_TRACKERS);
    try{
        // yield call(delay, 2000);
        const data = yield Api.getTrackersFromApi();
        // console.log('TRACKER RESULT');
        // console.log(data);
        yield put({type:RECEIVE_TRACKERS, payload: data.response });
    }
    catch(error){
        console.log(error);
        yield put({type:ERROR_TRACKERS, payload: error });
    }
    // yield takeLatest(REQUEST_MY_TRACKERS, returnMyTrackers)
}
