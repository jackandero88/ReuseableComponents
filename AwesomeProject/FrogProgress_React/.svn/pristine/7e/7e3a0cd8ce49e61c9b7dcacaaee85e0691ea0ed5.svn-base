import * as server from './server';
import * as SharedStorage from "../storage/SharedStorage";
import { USER_AUTH, STUDENT_TRACKER, YEARS_SUBJECT, OBJECTIVES_USERS, FETCH_JUDGEMENTS } from "../constants/endpoints";
import { Authentication } from "./Auth";

function* getUserAuthInfo(){
    const oauth_model = yield SharedStorage.retrieveFrogAuth();
    const schoolUrl = yield SharedStorage.retrieveSchoolUrl();
    var authParams =  {
        oauth_token: oauth_model.oauth_token, 
        oauth_secret: oauth_model.oauth_token_secret
    }
    const urlWithParams = yield Authentication.generateSignature(schoolUrl+USER_AUTH, authParams);
    const response = yield server.getUserAuthInfo(schoolUrl+USER_AUTH, urlWithParams);
    const data = yield response.json() // response.status == 200 ? response.json() : undefined
    if(response.status != 200)
        throw new Error(data.response.message);
    return data;
}


function* getTrackersFromApi(){
    const oauth_model = yield SharedStorage.retrieveFrogAuth();
    const schoolUrl = yield SharedStorage.retrieveSchoolUrl();
    var authParams =  {
        oauth_token: oauth_model.oauth_token, 
        oauth_secret: oauth_model.oauth_token_secret
    }
    const urlWithParams = yield Authentication.generateSignature(schoolUrl+STUDENT_TRACKER, authParams);
    const response = yield server.getTrackers(schoolUrl+STUDENT_TRACKER, urlWithParams);
    const data = yield response.json() // response.status == 200 ? response.json() : undefined
    if(response.status != 200)
        throw new Error(data.response.message);
    return data;
}
function* getYearRoller(params){
    const oauth_model = yield SharedStorage.retrieveFrogAuth();
    const schoolUrl = yield SharedStorage.retrieveSchoolUrl();
    var authParams =  {
        oauth_token: oauth_model.oauth_token, 
        oauth_secret: oauth_model.oauth_token_secret,
        curriculum_uuid: params.curriculum_uuid,
        subject_uuid: params.subject_uuid
    }
    const urlWithParams = yield Authentication.generateSignature(schoolUrl+YEARS_SUBJECT, authParams);
    const response = yield server.getYearRoller(schoolUrl+YEARS_SUBJECT, urlWithParams, params.curriculum_uuid, params.subject_uuid);
    // console.log('getYearRoller');
    // console.log(response);
    const data = yield response.json() // response.status == 200 ? response.json() : undefined
    if(response.status != 200)
        throw new Error(data.response.message);
    return data;
}

function* getObjectives(params){
    const oauth_model = yield SharedStorage.retrieveFrogAuth();
    const schoolUrl = yield SharedStorage.retrieveSchoolUrl();
    var authParams =  {
        oauth_token: oauth_model.oauth_token, 
        oauth_secret: oauth_model.oauth_token_secret,
        uuid: params.tracker_uuid,
        sections: (params.section),
        year_uuid: params.year_uuid
    }
    const urlWithParams = yield Authentication.generateSignature(schoolUrl+OBJECTIVES_USERS, authParams);
    const response = yield server.getObjectives(schoolUrl+OBJECTIVES_USERS, urlWithParams, params);
    // console.log('getObjectives');
    // console.log(response);
    const data = yield response.json() // response.status == 200 ? response.json() : undefined
    // console.log(data);
    if(response.status != 200)
        throw new Error(data.response.message);
    return data;
}

function* getJudgementColorsFromApi(){
    const oauth_model = yield SharedStorage.retrieveFrogAuth();
    const schoolUrl = yield SharedStorage.retrieveSchoolUrl();
    var authParams =  {
        oauth_token: oauth_model.oauth_token, 
        oauth_secret: oauth_model.oauth_token_secret
    }
    const urlWithParams = yield Authentication.generateSignature(schoolUrl+FETCH_JUDGEMENTS, authParams);
    const response = yield server.getJudgement(schoolUrl+FETCH_JUDGEMENTS, urlWithParams);
    const data = yield response.json() // response.status == 200 ? response.json() : undefined
    if(response.status != 200)
        throw new Error(data.response.message);
    return data;
}

export const Api ={
    getTrackersFromApi,
    getUserAuthInfo,
    getYearRoller,
    getObjectives,
    getJudgementColorsFromApi
}