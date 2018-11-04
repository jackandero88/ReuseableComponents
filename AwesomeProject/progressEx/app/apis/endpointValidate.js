import { VALIDATE_URL } from "../constants/endpoints";
function checkUrlStatus(url){
    // console.log(url);
    return fetch(url+VALIDATE_URL);
}

export const EndpointValidate = { checkUrlStatus };