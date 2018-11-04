import { RETURN_USER_INFO, ERROR_USER_INFO } from "../../store/actions/user";

const initialState = {
    userInfo: {
        displayname: "[username]",
        status: 200
    }
}

export default (state=initialState, action) => {
    // console.log(action);
    switch(action.type){
        case RETURN_USER_INFO:
            state = {...state, userInfo: action.payload}
            break;
        case ERROR_USER_INFO:
            console.log('ERROR_USER_INFO');
            // console.log(action.payload);
            state = {...state, userInfo: { status: 401} }
            break;
    }
    return state;
}