import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FoundationIcon from 'react-native-vector-icons/Foundation';

import * as trackerActions from '../store/actions/trackers';

import theme from '../themes/global/theme.style';
import globalStyles from '../themes/global/styles/styles';

import Tabs from "../components/tabs/Tabs";

import AllTrackerTabContent from "../components/AllTrackerTabContent";
import MyTrackerTabContent from "../components/MyTrackerTabContent";

import Loader from 'react-native-frog-loader/src/FrogLoader';

import { strings } from './../i18n';

class Trackers extends React.Component{

    list = [];

    constructor(props) {
        super(props);

        this.state = {
            myTrackerData: this.getMyTrackers(this.props.trackerData),
            allTrackerData: this.props.trackerData,
            showSearchBar: false,
            searchKey: null,
            activeTab: 0,
            loading: true,
        }
        // console.log(this.props.trackerData);
    }

    showLoading=()=>{
        this.setState({
            loading: true
        })
    }

    hideLoading=()=>{
        this.setState({
            loading: false
        })
    }

    backClick() {
        // console.log('back clicked');
        this.props.navigation.pop();
    }

    componentDidMount() {
        this.props.getTrackers();
    }

    componentWillReceiveProps(props) {
        // console.log('componentWillReceiveProps');
        // console.log(props.trackerData);
        // console.log(this.getMyTrackers(props.trackerData));
        this.setState({
            myTrackerData: this.getMyTrackers(props.trackerData),
            allTrackerData: props.trackerData
        });

        this.hideLoading();
    }

    onFilterChanged(text) {
        this.setState({
            myTrackerData: this.filterList(JSON.parse(JSON.stringify(this.getMyTrackers(this.props.trackerData))), text),
            // });
            // this.setState({
            allTrackerData: this.filterList(JSON.parse(JSON.stringify(this.props.trackerData)), text),

            searchKey: text
        });
        // console.log('this.props.trackerData');
        // console.log(this.state.myTrackerData);

        // if(text && text.length>0){
        //     this.setState({
        //         isSearching: true
        //     });
        // }
        // else {
        //     this.setState({
        //         isSearching: false
        //     });
        //     this._searchInput.value = text;
        // }
    }


    getMyTrackers = (trackers) => {
        // console.log(trackers);
        if (!trackers.isFetching) {
            trackers = JSON.parse(JSON.stringify(trackers));
            // console.log(trackers[0].years.length);
            trackers.filter(el => {
                // console.log(el);
                var a = el.years.filter(yr => {
                    // console.log(yr);
                    var v = yr.trackers.filter(t => {
                        // console.log(this.props.userInfo.uuid + ' = ' + t.created_by_uuid + ' == ' + (t.created_by_uuid === this.props.userInfo.uuid));
                        return t.created_by_uuid === this.props.userInfo.uuid;
                        // return false;
                    });
                    yr.trackers = v;
                    // // console.log(v);
                    return v.length > 0;

                });
                el.years = a;
                // console.log(a);
                return true;
            });
        }

        for (var i = 0; i < trackers.length; i++) {
            if (trackers[i].years.length == 0)
                this._setupNoMyTrackersData(trackers[i]);
        }
        // console.log(trackers);
        return trackers;
    }

    _setupNoMyTrackersData = (trackers) => {
        var blankTracker = {
            year: {
                name: "You have no trackers for this curriculum"
            },
            trackers: [
                {
                    subject: {
                        name: 'No Trackers'
                    }
                }
            ]
        };
        trackers.years.push(blankTracker);

    }

    filterList(list, text) {
        list.filter(el => {
            var a = el.years.filter(yr => {
                // console.log(yr);
                var v = yr.trackers.filter(t => {
                    // console.log(t);
                    return t.subject.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
                });
                yr.trackers = v;
                // console.log(v);
                return v.length > 0;
            });
            el.years = a;
            return true;
        });
        // console.log(list);
        for (var i = 0; i < list.length; i++) {
            if (list[i].years.length == 0)
                this._setupNoFilteredData(list[i]);
        }
        return list;
    }
    _setupNoFilteredData = (trackers) => {
        var blankTracker = {
            trackers: [
                {
                    subject: {
                        name: 'Unable to find any results in this area'
                    }
                }
            ]
        };
        trackers.years.push(blankTracker);

    }

    _toggleSearchBar = () => {
        this.setState({
            showSearchBar: !this.state.showSearchBar
        });
    }


    toggleTab(index) {
        this.setState({ activeTab: index })
        this.props.changeTab(index);
    }

    render() {
        return (
            <View style={globalStyles.container}>
                <View style={globalStyles.headerStyle}>
                    <TouchableOpacity style={globalStyles.backButtonHolder} onPress={() => this.backClick()}>
                        <Image source={require('../assets/icons/ic_back_light.png')} resizeMode='contain' style={globalStyles.backButtonStyle} />
                    </TouchableOpacity>
                    <Text style={globalStyles.headerTitleStyle}>{strings('charts.charts')}</Text>
                    <View style={globalStyles.rightButtonHolder}>
                        <TouchableOpacity onPress={() => this._toggleSearchBar()}>
                            <Image source={require('../assets/icons/search.png')} resizeMode='contain' style={globalStyles.rightButtonStyle} />
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    this.state.showSearchBar ?
                        <View style={globalStyles.subHeaderStyle}>
                            <View style={styles.inputContainer}>
                                <TextInput value={this.state.searchKey} style={styles.inputSearchStyle} placeholder="Search Trackers"
                                    onChangeText={(t) => this.onFilterChanged(t)} placeholderTextColor={theme.MID_GREY_COLOR} underlineColorAndroid='transparent' />
                                {
                                    this.state.searchKey && this.state.searchKey.length > 0 ?
                                        <Icon name='close-circle' style={styles.clearSearchButtonStyle} onPress={() => this.onFilterChanged('')} />
                                        :
                                        <FoundationIcon name='magnifying-glass' style={styles.searchButtonStyle} />
                                }

                            </View>
                        </View>
                        : null
                }

                <View style={globalStyles.tabsContainer}>
                    {/* Pull props out of children, and pull title out of props */}
                    <TouchableOpacity
                        style={[ globalStyles.tabContainer, (0 === this.state.activeTab ? globalStyles.tabContainerActive : []) ]}
                        onPress={() => this.toggleTab(0)} key="0">
                        <Text style={[ (0 === this.state.activeTab ? globalStyles.activeTabText : globalStyles.tabText) ]}>
                            {strings('charts.my_charts')}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[ globalStyles.tabContainer, (1 === this.state.activeTab ? globalStyles.tabContainerActive : []) ]}
                        onPress={() => this.toggleTab(1)} key="1">
                        <Text style={[ (1 === this.state.activeTab ? globalStyles.activeTabText : globalStyles.tabText)]}>
                            {strings('charts.all_charts')}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.containerWhite}>
                    <View style={[this.state.activeTab === 0 ? globalStyles.showView : globalStyles.hideView]}>
                        <MyTrackerTabContent trackers={this.state.myTrackerData} navigation={this.props.navigation}
                            style={[this.state.activeTab === 0 ? globalStyles.showView : globalStyles.hideView]} />
                    </View>
                    <View style={[this.state.activeTab === 1 ? globalStyles.showView : globalStyles.hideView]}>
                        <AllTrackerTabContent trackers={this.state.allTrackerData} navigation={this.props.navigation} />
                    </View>
                </View>
                <Loader show={this.state.loading}></Loader>
            </View>
        );
    }
}

mapStateToProps = (state) => {
    return {
        visibleTab: state.trackerReducer.visibleTracker,
        trackerData: state.trackerReducer.trackerData,
        // allTrackerData: state.trackerReducer.allTrackerData
        userInfo: state.userReducer.userInfo
    };
}

export default connect(mapStateToProps, { ...trackerActions })(Trackers);


const styles = StyleSheet.create({

    inputContainer: {
        backgroundColor: theme.WHITE_COLOR,
        borderRadius: 5,
    },
    inputSearchStyle: {
        color: theme.DARK_GREY_COLOR,
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontWeight: theme.FONT_WEIGHT_BOLD,
        borderRadius: 5,
        textAlign: 'left',
        paddingLeft: 10,
        marginRight: 40,
        height: 50
    },
    searchButtonStyle: {
        color: theme.MID_GREY_COLOR,
        fontSize: theme.FONT_SIZE_EXTRA_LARGE,
        position: 'absolute',
        right: 10,
        top: 10,
        zIndex: 9,
    },
    clearSearchButtonStyle: {
        color: theme.DARK_GREY_COLOR,
        fontSize: theme.FONT_SIZE_EXTRA_LARGE,
        position: 'absolute',
        right: 10,
        top: 10,
        zIndex: 9,
    }
});