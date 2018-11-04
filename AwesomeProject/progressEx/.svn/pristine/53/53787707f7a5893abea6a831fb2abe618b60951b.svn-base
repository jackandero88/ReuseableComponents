import React from "react";
import { View, Text, FlatList, Animated } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ObjectiveListItem from "./ObjectiveListItem";

import globalStyles from '../../../themes/global/styles/styles';
import themeStyle from "../../../themes/global/theme.style";

class ObjectiveHeaderItem extends React.Component {
    
    state = {
        isVisible: true
    };
    anime = {
        height: new Animated.Value(),
        expanded: true,
        contentHeight: 0,
    }

    constructor(){
        super();
        this._initContentHeight = this._initContentHeight.bind(this);
        this.toggle = this.toggle.bind(this);
        // this.anime.expanded = props.expanded;
    }
    
    _initContentHeight(evt) {
        if (this.anime.contentHeight>0) return;
        this.anime.contentHeight = evt.nativeEvent.layout.height;
        this.anime.height.setValue(this.anime.expanded ? this._getMaxValue() : this._getMinValue() );
    }

    _getMaxValue() { return this.anime.contentHeight };
    _getMinValue() { return 0 };

    toggle() {
        console.log('toggle');
        Animated.timing(this.anime.height, {
            toValue: this.anime.expanded ? this._getMinValue() : this._getMaxValue(),
            duration: 300,
        }).start();
        this.anime.expanded = !this.anime.expanded;
    }

    render(){
      return (
        <View style={ [globalStyles.margin20, globalStyles.marginBottom20]}>
            <View style={globalStyles.listItemDarkHeaderStyle}>
                <Text style={globalStyles.listItemStageHeaderTextStyle}>
                    { this.props.objectives.subject_area.name }  
                </Text>
                <Icon name={this.anime.expanded ? 'chevron-down' : 'chevron-up'} style={{ color: '#fff',fontSize: themeStyle.FONT_SIZE_EXTRA_LARGE,}} 
                    // onPress={() => this.toggleHeight()}  
                    onPress={this.toggle}
                />     
            </View>
            { 
                <Animated.View style={[{ height: this.anime.height }]} onLayout={this._initContentHeight}>
                    <FlatList
                        data={this.props.objectives.objectives}
                        keyExtractor={(item, index) => item.objective.uuid+'='+index}
                        renderItem={({item}) => <ObjectiveListItem item={item} navigation= {this.props.navigation} onObjectiveSelected={this.props.onObjectiveSelected} />}
                    />
                </Animated.View> 
            }
        </View>
      )
    }
}

export default ObjectiveHeaderItem;