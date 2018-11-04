import objectivesData from '../../data/objectivesData.json';
import * as objectiveActions from "../../store/actions/objectives";

const initialState = {
    years: [],
    objectives:  [],
    users: [],// objectivesData.response.users,
    results: [],// objectivesData.response.results
}

export default (state=initialState, action) => {
    switch(action.type){
        case objectiveActions.RETURN_YEAR_ROLLER:
            return {...state, years: action.payload }
        case objectiveActions.RETURN_OBJECTIVES:
            return {...state, objectives: this.getReformatteddList(action.payload.objectives), users: action.payload.users}
        case objectiveActions.CLEAR_OBJECTIVES:
            return {...state, objectives: []}
    }
    return state;
}


getReformatteddList = (objectives) =>{
    let list = [];

    Object.keys(objectives).forEach((key) => {
        list.push(objectives[key]);
    });
    // console.log('getReformatteddList');
    // console.log(list[0]);
    // console.log(list);

    let deepLinkingList = [];

    list.forEach((listItem) => {
        this.checkInnerObjective(deepLinkingList, 0, listItem.objectives);
        listItem.objectives = deepLinkingList;
    });

    console.log(list);
    return list;
}

checkInnerObjective = (deepLinkingList, index, list) => {
    // console.log(list);
    for(var i=0; i<list.length; i++){
        list[i].index = index;
        deepLinkingList.push(list[i]);
        if(list[i].children.length > 0)
            this.checkInnerObjective(deepLinkingList, index+1, list[i].children);
    }

    return deepLinkingList;
}