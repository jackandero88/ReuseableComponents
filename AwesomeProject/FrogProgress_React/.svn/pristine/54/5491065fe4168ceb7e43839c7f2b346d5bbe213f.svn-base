import { RETURN_JUDGEMENT_INFO, ERROR_JUDGEMENT_INFO } from "../../actions/judgements";

const initialState = {
    judgementList: []
}

export default (state=initialState, action) => {
    // console.log(action);
    switch(action.type){
        case RETURN_JUDGEMENT_INFO:
            state = {...state, judgementList: action.payload}
            break;
        case ERROR_JUDGEMENT_INFO:
            console.log('ERROR_USER_INFO');
            // console.log(action.payload);
            state = {...state, judgementList: { status: 401} }
            break;
    }
    return state;
}