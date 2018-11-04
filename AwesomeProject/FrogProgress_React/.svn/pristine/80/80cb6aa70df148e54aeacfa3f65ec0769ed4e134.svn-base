import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { connect } from "react-redux";

import globalStyles from '../themes/global/styles/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import StudentListItem from "./listitems/objective-list/StudentListItem";
var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window')

class StudentsTabContent extends React.Component {

    height = 0;

    constructor(props){
        super(props);
        // console.log('student const');
        // console.log(this.props);
        this.state = {
            addDocuments: false
        };
    }

    componentWillReceiveProps(props){
        this.height = height - this.props.groupActionBarHeight;
        // console.log(this.height +' / '+this.props.groupActionBarHeight);
    }

    

    renderSeparator = () => {
        return (
          null
        );
      };
    render(){
        return (
            <View style={[globalStyles.containerWhite]}>
                <View style={[globalStyles.padding10]}>
                    <TouchableOpacity style={globalStyles.blueBGStyle} >
                        <Text style={globalStyles.whiteTextStyle}>Select All</Text>
                    </TouchableOpacity>
                    <FlatList
                        style={{ marginBottom: this.props.groupActionBarHeight+50}}
                        ItemSeparatorComponent={this.renderSeparator}
                        data={this.props.users}
                        keyExtractor={(item, index) => item.uuid}
                        renderItem={({item, index}) =>  
                            <StudentListItem item={item} index={index} navigation= {this.props.navigation} onStudentChecked={this.props.onStudentChecked.bind(this)} />
                        }
                        />
                </View>
            </View>
        );
    }
}
mapStateToProps = (state) => {
    return {
        // users: state.objectiveReducer.users,
        // results: state.objectiveReducer.results
    }
}

export default connect(mapStateToProps)(StudentsTabContent);