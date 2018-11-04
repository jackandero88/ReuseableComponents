import { all, fork } from "redux-saga/effects";

import { getTrackers } from './trackerSaga';
import { getUserInfo } from './userSaga';
import { getJudgementInfo } from './judgementSaga';
import { getYearRoller, getObjectives } from './objectiveSaga';

export default function* rootSaga(){
    yield all([fork(getTrackers), fork(getUserInfo), fork(getYearRoller), fork(getObjectives),fork(getJudgementInfo)]);
}