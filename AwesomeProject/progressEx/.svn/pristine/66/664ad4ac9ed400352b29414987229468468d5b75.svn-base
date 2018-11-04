import React from 'react';
import { connect } from "react-redux";
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity, Animated, BackHandler } from 'react-native';
import theme from '../themes/global/theme.style';
import globalStyles from '../themes/global/styles/styles';
import * as userActions from "../store/actions/user";
import * as judgementActions from "../actions/judgements";

import * as SharedStorage from '../storage/SharedStorage';

import { strings } from './../i18n';

class Home extends React.Component{

    // static navigationOptions = {
    //     header: null
    // }
    anime = {
        height: new Animated.Value(),
        expanded: false,
        contentHeight: 0,
    }


    constructor(props){
        super(props);

        const { navigation } = this.props;

        this.state = {
            isHidden: true
        };
        
        this._initContentHeight = this._initContentHeight.bind(this);
        this.toggle = this.toggle.bind(this);
        this.anime.expanded = props.expanded;

        this.props.getUserInfo();

        console.log ('Yhan tk aa gya');
        this.props.getJudgementInfo();
    }

    // componentWillMount(){
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    // }

    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    // }

    // handleBackPress = () => {
    //     console.log('back pressed');
    //     BackHandler.exitApp();
    // }
    
    captureEvidence(){
        this.props.navigation.navigate('Trackers');
    }

    _logoutUser = () => {
        SharedStorage.deleteEverything().then((res) => {
            // this.props.navigation.navigate('Login');
            this.props.navigation.dispatch({
                type: 'ReplaceCurrentScreen',
                routeName: 'Login',
                key: 'MoveToHome'
            });
        });
    }

    updateExemplar(){}
    
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
            <View style={globalStyles.container}>
                <View style={styles.headerContainer} >
                    <View style={styles.topSettingsContainer}>
                        <View style={styles.topSettingHeader}>
                            <Image source={require("../assets/icons/ic_frog.png")} style={styles.settingLogoStyle} resizeMode="center" />
                            <Text style={styles.settingWelcomeMessageStyle}>{strings('home.welcome')} {this.props.userInfo.displayname}</Text>
                            <TouchableOpacity onPress={this.toggle }>
                                <Image source={require("../assets/icons/ic_settings.png")} style={styles.settingIconStyle} />
                            </TouchableOpacity>
                            
                        </View>

                            <Animated.View style={[{ height: this.anime.height }]} onLayout={this._initContentHeight}>
                    
                            <View>
                                <TouchableOpacity style={globalStyles.greenBGStyle}>
                                    <Text style={globalStyles.whiteTextStyle}>{strings('home.help')}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={globalStyles.redBGStyle} onPress={()=> this._logoutUser()}>
                                    <Text style={globalStyles.whiteTextStyle}>Logout {this.props.userInfo.displayname}</Text>
                                </TouchableOpacity>
                            </View>
                            </Animated.View>
                        
                    </View>
                </View>
                
                <View style={globalStyles.logoContainer}>
                    <Image source={require("../assets/images/frog-progress-logo.png")} style={globalStyles.logo} resizeMode='contain' />
                    <Image source={require("../assets/images/frog-progress-text.png")} style={globalStyles.logoTextContainer} resizeMode='contain' />
                </View>
                {/* <View style={globalStyles.logoContainer}>
                    <Image source={require("../assets/frog-progress-logo.png")} style={globalStyles.logo} />
                    <View style={globalStyles.logoTextContainer}>
                        <Text style={ globalStyles.logoTextFrog }>Frog</Text>
                        <Text style={ globalStyles.logoTextProgress }>Progress</Text>
                    </View>
                </View> */}
                <View style={globalStyles.footer}>
                    <View style={globalStyles.bottomContainer}>
                        <Text style={styles.questionText}>{strings('home.what_would_like_to_do')}</Text>
                         <TouchableOpacity style={globalStyles.blueBGStyle} onPress={()=>this.captureEvidence()}>
                            <Text style={globalStyles.whiteTextStyle}>{strings('home.capture_evidence')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={globalStyles.blueBGStyle}>
                            <Text style={globalStyles.whiteTextStyle}>{strings('home.update_exampler')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

mapStateToProps = (state) => {
    return {
        userInfo: state.userReducer.userInfo
    }
}

export default connect(mapStateToProps, {...userActions,...judgementActions})(Home);

const styles = StyleSheet.create({
    questionText: {
        color: theme.SECONDARY_COLOR,
        fontSize: theme.FONT_SIZE_MEDIUM,
        alignSelf: 'center',
    },
    headerContainer:{
        position: 'absolute',  
        width: Dimensions.get('window').width, 
        zIndex: 999
    },
    topSettingsContainer: {
        flex: 1,
        backgroundColor: theme.DARK_GREY_COLOR,
        margin: 20,
        padding: 10,
        borderRadius: 5,
    },
    topSettingHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    settingIconStyle: {
        width: 30,
        height: 30,
    },
    settingLogoStyle: {
        width: 50,
        height: 30,
        // backgroundColor: '#f00'
    },
    settingWelcomeMessageStyle: {
        alignSelf: 'flex-start',
        flex: 1,
        marginLeft: 10,
        fontSize: theme.FONT_SIZE_MEDIUM,
        color: theme.WHITE_COLOR,
        fontWeight: 'bold',
        padding: 5,
        // width: 50,
        // height: 30,
        // backgroundColor: '#f00'
    }
});