import * as trackerActions from "../../store/actions/trackers";

const initialState = {
    visibleTracker: 0,
    trackerData: {isFetching: true} 
}

export default (state = initialState, action) => {
    // console.log(action);
    switch(action.type){
        case trackerActions.FILTER_TRACKERS:
            return {...state, trackerData: action.payload};
            break;
        case trackerActions.ACTIVE_TRACKERS_TAB:
            state = Object.assign({}, state, {
                visibleTracker : action.payload
            });
            // console.log(state);
            break;
        case trackerActions.RECEIVE_TRACKERS:
            state = {
                ...state, 
                trackerData: action.payload
            };
            break;
        case trackerActions.ERROR_TRACKERS:
            // console.log(action);
            state = {...state, error: action.payload};
            break;
    }
    return state;
}

