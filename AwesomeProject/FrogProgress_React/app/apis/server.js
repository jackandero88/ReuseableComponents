import { USER_AUTH, STUDENT_TRACKER, YEARS_SUBJECT, OBJECTIVES_USERS } from "../constants/endpoints";
// const rootUrl = "https://lal-demo.frogos.net";


export const getUserAuthInfo = (schoolUrl, query) => {
    return fetch(schoolUrl+'?'+query, {
        method: 'GET',
        headers: getHeader()
    });
}

export const getTrackers = (schoolUrl, query) => {
    var f = fetch(schoolUrl+'?'+query, {
        method: 'GET',
        headers: getHeader()
    });
    // console.log(f);
    return f;
}

export const getYearRoller = (schoolUrl, query) => {
    // console.log('YEARS');
    // console.log(schoolUrl+'?'+query);
    return fetch(schoolUrl+'?'+query, { // +`&curriculum_uuid=${curriculum_uuid}&subject_uuid=${subject_uuid}`, {
        method: 'GET',
        headers: getHeader()
    });
}

export const getObjectives = (schoolUrl, query, params) => {
    // console.log('OBJECTIVES');
    query = query.replace('%5B', '[').replace( '%5D', ']').replace( '%2C', ',').replace(/'/g, "%27");
    // query =  `uuid=${params.tracker_uuid}&sections=${params.section.replace(/'/g, "%27")}&year_uuid=${params.year_uuid}`+'&'+ query
    // console.log(schoolUrl+'?'+query);
    var f=  fetch(schoolUrl+'?'+query, {
        // schoolUrl = "https://rsystemsprogressrel1.frogtest.co.uk/api/fdp/2/studenttracker/getResults?uuid=D6794FA4200A731DBDB16F046C45640C500051FC2279C0E0&sections=[%27objectives%27,%27time_periods%27]&year_uuid=3010EE9420090EBCB519DF1F8931920C4105EA0C98635802&oauth_consumer_key=qj9dvvss3bogrryquze5c52alzxyjlnf&oauth_token=17bf915443ada64f169c89eaaba14fcbec37f484&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1538378576&oauth_nonce=499ea006727f66dca02baf40f74cafbb&oauth_version=1.0&oauth_signature=nrGgjxAkGx0BnFHToAnoCOKSA9Y=";
    // var f=  fetch(schoolUrl, {
        method: 'GET',
        headers: getHeader()
    });
    
    // console.log(f);
    return f;
}

export const getJudgement = (schoolUrl, query) => {
    var f = fetch(schoolUrl+'?'+query, {
        method: 'GET',
        headers: getHeader()
    });
    // console.log(f);
    return f;
}

getHeader = () => {
    return {
        'X-AuthType': 'oauth_1_0_a',
        // 'Content-Type': 'application/json',
        // 'X-AuthType': 'frogos_token',
        // 'X-User': token
    };
}