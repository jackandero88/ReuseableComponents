import React from "react";
import { Text, FlatList } from "react-native";
import { connect } from "react-redux";
import ObjectiveHeaderItem from "./listitems/objective-list/ObjectiveHeaderItem";

class ObjectivesTabView extends React.Component {
    
    state = {
        objectives: []
    }


    // componentDidMount(){
    //     console.log('componentDidMount');
    //     // console.log(this.props.objectives);

    //     // this.setState({
    //     //     objectives: this.getReformatteddList(this.props.objectives)
    //     // }, () => {            
    //     //     console.log(this.state.objectives);
    //     // });
    //     // console.log(this.state.objectives);
    // }

    // componentWillReceiveProps(props){
    //     console.log('componentWillReceiveProps');
        
    //     // if(this.props.objectives !== props.objectives){
    //     //     this.setState({
    //     //         objectives: this.getReformatteddList(props.objectives)
    //     //     });
    //     // }
    // }


    

    render(){
        return (
            <FlatList
                data={this.props.objectives}
                keyExtractor={(item, index) => item.subject_area.uuid+'='+index}
                renderItem={({item}) => <ObjectiveHeaderItem objectives={item} navigation= {this.props.navigation} onObjectiveSelected={this.props.onObjectiveSelected} />}
              />
            // 
        );
    }

        
    // getReformatteddList(objectives){
    //     let list = [];
    //     console.log(objectives);

    //     Object.keys(objectives).forEach((key) => {
    //         list.push(objectives[key]);
    //     });
    //     // console.log('getReformatteddList');
    //     // console.log(list[0]);
    //     // console.log(list);

    //     let deepLinkingList = [];

    //     list.forEach((listItem) => {
    //         this.checkInnerObjective(deepLinkingList, 0, listItem.objectives);
    //         listItem.objectives = deepLinkingList;
    //     });

    //     console.log(list);
    //     return list;
    // }

    // checkInnerObjective(deepLinkingList, index, list){
    //     // console.log(list);
    //     for(var i=0; i<list.length; i++){
    //         list[i].index = index;
    //         deepLinkingList.push(list[i]);
    //         if(list[i].children.length > 0)
    //             this.checkInnerObjective(deepLinkingList, index+1, list[i].children);
    //     }

    //     return deepLinkingList;
    // }
}

mapStateToProps = (state) => {
    return {
        objectives: state.objectiveReducer.objectives
    }
}

export default connect(mapStateToProps)(ObjectivesTabView);