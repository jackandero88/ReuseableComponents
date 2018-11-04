import { USER_AUTH, AUTH_VALIDATE } from "../constants/endpoints";
import * as SharedStorage from '../storage/SharedStorage';
import { oauth2, oauth1 } from "./../auth/auth";

generateSignature = ( apiUrl, authParams) => {
    const token = {
        key: authParams.oauth_token,
        secret: authParams.oauth_token_secret
      };

    // parameters = {
    //     oauth_secret: 'd4530fd790db8f0060cdbf28587a6987c9fb0f64',
    //     oauth_consumer_key : 'qj9dvvss3bogrryquze5c52alzxyjlnf',
    //     oauth_token : '358a8c19aea5461784ad8ccf50dc6d9efd396211',
    //     oauth_nonce : 'c341f77e5eab61b18ce4c56f02d6a42a',
    //     oauth_timestamp : '1538133198',
    //     oauth_signature_method : 'HMAC-SHA1',
    //     oauth_version : '1.0',
    //     // 
    // }

    const request_data = {
        url: apiUrl,
        method: 'GET',
        data: authParams//  { oauth_token: authParams.oauth_token, oauth_secret: authParams.oauth_token_secret } //, oauth_verifier: authParams.oauth_verifier, oauth_secret: secret}
    };
    
    params = oauth1.authorize(request_data, token);
    // console.log("Auth2");
    // console.log(params);
    delete params.oauth_secret;
    // delete params.sections;
    // delete params.uuid;
    // delete params.year_uuid;
    // console.log(params);
    var query = Object.keys(params)
        .map(k => k + '=' +encodeURIComponent(params[k]) )// (k==='sections' ? params[k] : encodeURIComponent(params[k]) ))
        .join('&');
    // console.log(query);
    return  query;
}


generateSignature2 = ( apiUrl, authParams) => {
    // console.log("generateSignature2");
    const token = {
        key: authParams.oauth_token,
        secret: authParams.oauth_token_secret
      };

      authParams = {
        ...authParams,
        oauth_secret: '8de9fcd76fc0818a1485245a1c6b1b6fefe06f90',
        oauth_consumer_key : 'qj9dvvss3bogrryquze5c52alzxyjlnf',
        oauth_token : 'a16e6a6de547886d29c809521946423e56b70a2d',
        oauth_nonce : '7e5233bcfba04142d67af409433805b9',
        oauth_timestamp : '1538384311',
        oauth_signature_method : 'HMAC-SHA1',
        oauth_version : '1.0',
        // 
    }
    // console.log(authParams);

    const request_data = {
        url: apiUrl,
        method: 'GET',
        data: authParams//  { oauth_token: authParams.oauth_token, oauth_secret: authParams.oauth_token_secret } //, oauth_verifier: authParams.oauth_verifier, oauth_secret: secret}
    };
    
    // console.log(apiUrl);
    params = oauth2.authorize(request_data, token);
    // console.log(params);
    delete params.oauth_secret;
    // console.log(params);
    var query = Object.keys(params).sort()
        .map(k => k + '=' +encodeURIComponent(params[k]))
        .join('&');
    // console.log(query);
    return  query;
}

// checkAuthentication = (url) => {
//     // console.log(url);
//     return fetch(url+AUTH_VALIDATE, {
//             method: 'GET',
//             headers: {
//               Accept: 'application/json',
//               'Content-Type': 'application/json',
//             }
//           })
// }

// storeValidatedData = (data) => {
//     if(data.startsWith('('))
//     {
//         data = data.substring(1, data.length);
//     }
//     if(data.endsWith(');'))
//     {
//         data = data.substring(0, data.length-2);
//     }
//     var response = JSON.parse(data);
//     // console.log(response);

//     SharedStorage.storeFrogSecret(response.token);
//     return response;
// };

// export const Authentication = { checkAuthentication, storeValidatedData };
export const Authentication = { generateSignature, generateSignature2 };