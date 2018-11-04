import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import globalStyles from '../../../themes/global/styles/styles';

class TrackerListItem extends React.Component {

    openObjectiveView = () => {
        this.props.navigation.navigate('Objectives', {
            tracker: this.props.tracker,
            title:  this.props.tracker.subject.name+( this.props.tracker.group ? ' - '+ this.props.tracker.group.name : '' )
        });
    }

    render() {
      return (
        <TouchableOpacity onPress={() => this.openObjectiveView()}>
            <View style={[globalStyles.listItemTrackerStyle, globalStyles.listThreeSidedBorderStyle]}>
                <View>
                    <Text style={globalStyles.listItemTrackerTitleStyle}>
                        { this.props.tracker.subject.name}{( this.props.tracker.group ? ' - '+ this.props.tracker.group.name : '' )}
                    </Text>
                    {
                        this.props.tracker.curriculum ?
                        <Text style={globalStyles.listItemTrackerSubTitleStyle}>
                            {this.props.tracker.curriculum.name}
                        </Text> : null
                    }
                </View>
                    {
                        this.props.tracker.curriculum ?
                        <Image source={require('./../../../assets/icons/ic_next_dark.png')} resizeMode='center' style={globalStyles.listClickIcon} />
                        : null 
                    }
            </View>
        </TouchableOpacity>
      );
    };
}

export default TrackerListItem;
