export const FILTER_TRACKERS = 'FILTER_TRACKERS';
export const ACTIVE_TRACKERS_TAB = 'ACTIVE_TRACKERS_TAB';

export const REQUEST_MY_TRACKERS = 'REQUEST_MY_TRACKERS';
export const RECEIVE_MY_TRACKERS = 'RECEIVE_MY_TRACKERS';
export const ERROR_MY_TRACKERS = 'ERROR_MY_TRACKERS';

export const REQUEST_ALL_TRACKERS = 'REQUEST_ALL_TRACKERS';
export const RECEIVE_ALL_TRACKERS = 'RECEIVE_ALL_TRACKERS';
export const ERROR_ALL_TRACKERS = 'ERROR_ALL_TRACKERS';

export const getMyTrackers = () => ({type: REQUEST_MY_TRACKERS});
export const returnMyTrackers = (list) => (
    {
        type: RECEIVE_MY_TRACKERS,
        payload: list
    });

export const getAllTrackers = () => ({type: REQUEST_ALL_TRACKERS});
export const returnAllTrackers = (list) => (
    {
        type: RECEIVE_ALL_TRACKERS,
        payload: list
    });


export const changeTab = (index) =>{
    return {
        type: ACTIVE_TRACKERS_TAB,
        payload: index
    }
};