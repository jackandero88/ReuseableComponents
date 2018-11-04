export const FILTER_TRACKERS = 'FILTER_TRACKERS';
export const ACTIVE_TRACKERS_TAB = 'ACTIVE_TRACKERS_TAB';

export const REQUEST_TRACKERS = 'REQUEST_TRACKERS';
export const RECEIVE_TRACKERS = 'RECEIVE_TRACKERS';
export const ERROR_TRACKERS = 'ERROR_TRACKERS';

// export const REQUEST_ALL_TRACKERS = 'REQUEST_ALL_TRACKERS';
// export const RECEIVE_ALL_TRACKERS = 'RECEIVE_ALL_TRACKERS';
// export const ERROR_ALL_TRACKERS = 'ERROR_ALL_TRACKERS';

export const getTrackers = () => ({type: REQUEST_TRACKERS});

export const changeTab = (index) =>{
    return {
        type: ACTIVE_TRACKERS_TAB,
        payload: index
    }
};