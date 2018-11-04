const rootUrl = "https://19b4f111-8bcb-41a9-9143-49907258a5d6.mock.pstmn.io/";

export const GET_ALL_TRACKERS = "/allTrackers";
export const GET_MY_TRACKERS = "/myTrackers";

export const createGetRequest = (api) => {
    return fetch(rootUrl+api, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });
}