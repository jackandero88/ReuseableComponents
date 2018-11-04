import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import RoundCheckbox from '../../custom-components/RoundCheckbox';

import globalStyles from '../../../themes/global/styles/styles';
import themeStyle from "../../../themes/global/theme.style";

class ObjectiveListItem extends React.Component {

    constructor(props){
        super(props);
        // console.log(this.props);
        this.state = {
            item: this.props.item,
            selected: false
        };
    }

    componentDidMount(){
    }
    
    
    render(){
      return (
        <View style={[globalStyles.listItemTrackerStyle, globalStyles.noPadding, globalStyles.listThreeSidedBorderStyle]}>
            <View style={[styles.innerItemHolderStyle, (this.state.item.index > 0 ? styles.leftBar : '')]}>
            <RoundCheckbox
                checked={this.state.selected}
                onValueChange={(newValue) => {
                    // console.log(newValue);  
                    // this.state.item.is_kpi = newValue;
                    this.setState({
                        selected: newValue
                    })

                    this.props.onObjectiveSelected(newValue, this.state.item.objective.uuid);
                }}
                />
                { this.state.item.index > 1 ? <Image source={require('./../../../assets/icons/lo-indicator.png')}  style={styles.loIconStyle} /> : null }
            <Text style={styles.textStyle}>
                { this.state.item.objective.description }                
            </Text>
            {/* <FlatList
                data={this.getReformatteddList()}
                keyExtractor={(item, index) => item.subject_area.uuid}
                renderItem={({item}) => <ObjectiveHeaderItem objectives={item} navigation= {this.props.navigation} />}
              /> */}
            </View>
            {
                this.state.item.objective.is_kpi ?
                    <View style={styles.kpiLabelStyle} >
                        <Text style={styles.kpiLabelText} >
                            KPI
                        </Text>
                    </View> : null
            }
            {/* <FlatList
                data={props.objectives}
                keyExtractor={(item, index) => item.subject_area.uuid}
                renderItem={({item}) => <Text>{item.subject_area.name}</Text> }// <YearListItem years={item} navigation= {props.navigation} />}
            /> */}
        </View>
      );
    }
}

export default ObjectiveListItem;

const styles = StyleSheet.create({
    innerItemHolderStyle: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 5,
        borderLeftWidth: 8,
        borderLeftColor: 'transparent',
    },
    textStyle:{
        flex:1,
        backgroundColor: themeStyle.WHITE_COLOR,
        alignSelf: 'stretch',
        color: themeStyle.BLACK_COLOR
    },  
    kpiLabelStyle: {
        backgroundColor: themeStyle.GREEN_COLOR,
        // position: 'absolute',
        // right: 0,
        width: 30,
        // height:'100%',
        flexDirection:'column', 
        justifyContent:'center',
        alignItems: 'center',
    },
    kpiLabelText: {        
        transform: [{ rotate: '-90deg'}],
        color: themeStyle.WHITE_COLOR,
        fontWeight: 'bold',
    },
    leftBar: {
        borderLeftColor: '#dcdcdc',
    },
    loIconStyle: {
        width: 20,
        height: 20,
        marginRight: 10,
    }
});