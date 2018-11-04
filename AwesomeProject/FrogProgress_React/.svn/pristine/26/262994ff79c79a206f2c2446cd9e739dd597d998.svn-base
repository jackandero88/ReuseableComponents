import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import globalStyles from '../themes/global/styles/styles';
import themeStyle from "../themes/global/theme.style";

import * as objectiveActions from '../store/actions/objectives';

import Toast from 'react-native-simple-toast';

import Tabs from "../components/tabs/Tabs";
import ObjectivesTabContent from "../components/ObjectivesTabContent";
import StudentsTabContent from "../components/StudentsTabContent";
import { strings } from './../i18n';

class Objectives extends React.Component {

    list = [];

    state = {
        title: 'Tracker Name',
        tracker: {},
        years: [],
        selectedObjectives: [],
        addDocuments: false,
        actionBarHeight: 0,
        activeTab: 0
    }
    
    constructor(){
        super();
    }
    componentWillMount(){        
        this.props.clearObjectives();
    }

    componentDidMount(){
        const { navigation } = this.props;
        const tracker = this.props.navigation.getParam('tracker', 'NO-TRACKERS');
        this.setState({
            title: this.props.navigation.getParam('title', 'Tracker Name')
        });

        if(tracker === 'NO-TRACKERS'){
            Toast.show('Could not get a valid tracker', Toast.LONG);
            this.props.navigation.pop();
        }
        else{
            this.setState({
                tracker: tracker
            });
            var params = {curriculum_uuid: tracker.curriculum.uuid, subject_uuid: tracker.subject.uuid};
            // console.log(params);
            this.props.getYearRoller(params);
        }
    }

    backClick(){
        this.props.navigation.pop();
    }

    componentWillReceiveProps(props){
        // console.log(props.years);
        // console.log(this.props.years !== props.years);
        if(this.props.years !== props.years){
            this.setState({
                years: props.years
            }, ()=>{
                // console.log(this.state.years);

                var sections = `['objectives','time_periods']`;
                var params = {tracker_uuid: this.state.tracker.uuid, section: sections, year_uuid: this.state.years[0].uuid};
                // console.log(params);
                this.props.getObjectives(params);
            });
        }
    }

    _objectivesSelected = (isChecked, objectiveUUID) => {
        // console.log(objectiveUUID+'objective selection changed to '+isChecked);
        this.list = this.state.selectedObjectives;
        if(isChecked){
            this.list.push(objectiveUUID);
        }
        else{
            this.list = this.list.filter(e => e != objectiveUUID)
        }

        this.setState({
            selectedObjectives: this.list
        }, () => {
            // console.log(this.state.selectedObjectives);
        })
    }

    _getFormattedStudentsList(){
        this.list = [];

        Object.keys(this.props.users).forEach((key) => {
            this._getJudgementType(this.props.users[key], key);
            this.list.push(this.props.users[key]);
        });
        // console.log('getReformatteddList');
        // console.log(this.list);
        return this.list;
    }

    

    _getJudgementType(user, userKey){
        let item = null;
        Object.keys(this.props.results).forEach((resultKey) => {
            let result = this.props.results[resultKey];
            let userResult = result[userKey];
            if(userResult){
                Object.keys(userResult).forEach((key) => {
                    item = userResult[key];
                });
            }
        });
        user.judgement = item;
    }

    _studentChecked(index, isChecked){
        // console.log('student checked');
        // this.setState({
        //     addDocuments: isChecked
        // });
        // console.log(index+' = '+isChecked);
        // console.log(this.list);
        // this.list[index].isChecked = isChecked;


        let isAnythingChecked = false;
        this.list.map(function(user, i){
            if(user.isChecked)
                isAnythingChecked = true;   
        });

        this.setState({
            addDocuments: isAnythingChecked
        });
    }

    toggleTab(index){
        this.setState({ activeTab: index })
    }

    render(){
        return(
            <View style={ globalStyles.container}>
                <View style={ globalStyles.headerStyle }>
                    <TouchableOpacity style={globalStyles.backButtonHolder} onPress={() => this.backClick()}>
                        <Image source={require('../assets/icons/ic_back_light.png')} resizeMode='contain' style={globalStyles.backButtonStyle} />
                    </TouchableOpacity>
                    <Text style={globalStyles.headerTitleStyle}>
                        {this.state.title}
                    </Text>
                </View>
                <View style={globalStyles.tabsContainer}>

                    <TouchableOpacity
                        style={[ globalStyles.tabContainer, (0 === this.state.activeTab ? globalStyles.tabContainerActive : []) ]}
                        onPress={() =>  this.toggleTab(0) } key="0">
                        <Text style={[ (0 === this.state.activeTab ? globalStyles.activeTabText : globalStyles.tabText) ]}>
                            {strings('objectives.objectives')}
                        </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={[ globalStyles.tabContainer, (1 === this.state.activeTab ? globalStyles.tabContainerActive : []) ]}
                        onPress={() => ( this.state.selectedObjectives.length > 0 ?  this.toggleTab(1) : null) } key="1">
                        <Text style={[ (1 === this.state.activeTab ? globalStyles.activeTabText : globalStyles.tabText),
                            ( this.state.selectedObjectives.length == 0 ? globalStyles.deactiveTabText : []) ]}>
                            {strings('objectives.students')}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.containerWhite}>
                    <View style={[this.state.activeTab===0 ? globalStyles.showView :  globalStyles.hideView] }>
                        <ObjectivesTabContent onObjectiveSelected={this._objectivesSelected.bind(this)} />
                    </View>
                    <View style={[this.state.activeTab===1 ? globalStyles.showView :  globalStyles.hideView] }>
                        <StudentsTabContent onStudentChecked={this._studentChecked.bind(this)} users={this._getFormattedStudentsList()} groupActionBarHeight={this.state.actionBarHeight} />
                    </View>
                </View>
                <View style={ globalStyles.bottomView} onLayout={(event) => {
                    var {x, y, width, height} = event.nativeEvent.layout;
                        this.setState({
                            actionBarHeight: event.nativeEvent.layout.height
                        })
                    }} >
                        <View style={globalStyles.flexColumn}>
                    {
                        this.state.addDocuments ?
                            <View style={[globalStyles.flexRow, globalStyles.paddingLeft10, globalStyles.paddingRight10, globalStyles.paddingBottom10, { justifyContent: 'space-between'}]}>
                                <TouchableOpacity style={[globalStyles.blueBGStyle, globalStyles.flex]}>
                                    <Icon name='image' style={{ color: '#fff',fontSize: themeStyle.FONT_SIZE_EXTRA_LARGE}}  />     
                                </TouchableOpacity>
                                <TouchableOpacity style={[globalStyles.blueBGStyle, globalStyles.flex, globalStyles.marginLeft10]}>
                                    <Icon name='file-document' style={globalStyles.whiteIconStyle}  />     
                                </TouchableOpacity>
                                <TouchableOpacity style={[globalStyles.blueBGStyle, globalStyles.flex, globalStyles.marginLeft10]}>
                                    <Icon name='checkbox-blank-circle-outline' style={globalStyles.whiteIconStyle}  />     
                                </TouchableOpacity>
                            </View> : null
                    }
                    <TouchableOpacity style={[globalStyles.darkGreyBGStyle, globalStyles.flex]}>
                        <Icon name='upload' style={globalStyles.darkGreyIconStyle}  />     
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

}
mapStateToProps = (state) => {
    return {
        years: state.objectiveReducer.years,
        users: state.objectiveReducer.users,
        results: state.objectiveReducer.results
    };
}

export default connect(mapStateToProps, {...objectiveActions})(Objectives);