import React from 'react';
import { connect } from "react-redux";
import { Text, View, Image, TextInput, Linking, StyleSheet, BackHandler, TouchableOpacity } from 'react-native';
import theme from '../themes/global/theme.style';
import globalStyles from '../themes/global/styles/styles';
import AuthWebView from "../components/auth-components/AuthWebView";
import { EndpointValidate } from "../apis/endpointValidate";
import * as userActions from "../store/actions/user";
import Toast from 'react-native-simple-toast';
import Loader from 'react-native-frog-loader/src/FrogLoader';

import * as SharedStorage from '../storage/SharedStorage';

// import { Authentication } from "../apis/Auth";
import { oauth, oauth1, oauth2 } from "./../auth/auth";


class Login extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            schoolUrl: 'rsystemsprogressrel1.frogtest.co.uk',
            redirectUrl: '',
            doHaveToken: false,
            loadWebView: false,
            loading: false,
            isBottomVisible: false,
        }

        this.generateTokenSignature = this.generateTokenSignature.bind(this);
        this.callAccessApi = this.callAccessApi.bind(this);
        // console.log(this.state.loadWebView);       
        
        // this.demoAuth();
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

    showBottomLayout=()=>{
        this.setState({
            isBottomVisible: true
        })
    }

    hideBottomLayout=()=>{
        this.setState({
            isBottomVisible: false
        })
    }


    onButtonPress = () => {
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        console.log('back pressed');
        BackHandler.exitApp();
    }

    demoAuth(){
        const token = {
            key: 'a16e6a6de547886d29c809521946423e56b70a2d',
            secret: '8de9fcd76fc0818a1485245a1c6b1b6fefe06f90'
          };
    
        const request_data = {
            url: 'https://rsystemsprogressrel1.frogtest.co.uk/api/fdp/1/auth/getauth',
            method: 'POST',
            data: { oauth_token: token.key, oauth_secret: token.secret } //, oauth_verifier: authParams.oauth_verifier, oauth_secret: secret}
        };
        
        params = oauth2.authorize(request_data, token);
    }

    captureButton = "Capture Evidence";

    checkIfUserAlreadyLogin = () => {
        // this.setState({
        //     redirectUrl: 'https://www.google.com',
        //     loadWebView: true,
        // });
        this.showLoading();
        this.hideBottomLayout();
        
        SharedStorage.retrieveSchoolUrl().then((res) => {
            console.log(res);
            if (res && res.length > 0) {
                console.log(res);
                SharedStorage.retrieveFrogAuth().then((oauth_model) => {
                    console.log(oauth_model);
                    if (oauth_model && oauth_model.oauth_token && oauth_model.oauth_token_secret) {
                        // console.log(token);
                        this.props.getUserInfo();
                        // this.props.navigation.navigate('Home');
                    }
                    else {
                        this.showBottomLayout();
                        this.hideLoading();
                    }
                });
            }
            else {
                this.showBottomLayout();
                this.hideLoading();
            }
        });
    }

    componentWillReceiveProps(props) {
        // console.log(props);

        if (props.userReducer.userInfo !== this.props.userReducer.userInfo) {
            if (props.userReducer.userInfo) {
                // console.log(props.userReducer.userInfo.status );
                if (!props.userReducer.userInfo.status || props.userReducer.userInfo.status == 200) {
                    this.moveToHome();
                }
                else {
                    this.showBottomLayout();
                    this.hideLoading();
                }
            }
        }
    }

    moveToHome() {
        // console.log('moving to home');
        // this.props.navigation.navigate('Home');
        this.hideLoading();
        this.props.navigation.dispatch({
            type: 'ReplaceCurrentScreen',
            routeName: 'Home',
            key: 'MoveToHome'
        });
    }


    validateUrl() {
        // this.props.navigation.navigate('Home');
        if (this.state.schoolUrl) {
            // console.log(this.state.schoolUrl);
            EndpointValidate.checkUrlStatus('https://' + this.state.schoolUrl).then((res) => {
                if (res.status == 404) {
                    console.log('Error!! Page not found');
                }
                else {

                    SharedStorage.storeSchoolUrl('https://' + this.state.schoolUrl);
                    this.generateTokenSignature('https://' + this.state.schoolUrl);
                    // console.log('Its a valid url');
                    // this.setState({
                    //     loadWebView: true
                    // });
                }
            })
        }
        else {
            console.log('no school url');
        }
    }

    _closeAuthWebView =() => {
        this.setState({
            loadWebView: false,
        });
    }

    render() {
        return (
            <View style={globalStyles.container}>
                {this.state.loadWebView && !this.state.doHaveToken ?
                    <AuthWebView
                        schoolUrl={this.state.redirectUrl}
                        closeAuthWebView={this._closeAuthWebView.bind(this)}
                        oauth_token_secret={this.state.oauth_token_secret}
                        style={{ flex: 1 }}
                    /> :
                    <View style={globalStyles.container}>
                        <View style={globalStyles.logoContainer}>
                            <Image source={require("../assets/images/frog-progress-logo.png")} style={globalStyles.logo} resizeMode='contain' />
                            <Image source={require("../assets/images/frog-progress-text.png")} style={globalStyles.logoTextContainer} resizeMode='contain' />
                        </View>
                        {
                             this.state.isBottomVisible ?
                            <View style={globalStyles.footer}>
                                <View style={globalStyles.bottomContainer}>
                                    <TextInput style={globalStyles.inputStyle} placeholder="Please enter school url here"
                                        value={this.state.schoolUrl}
                                        underlineColorAndroid='transparent' placeholderTextColor={theme.LIGHT_GREY_COLOR}
                                        onChangeText={schoolUrl => this.setState({ schoolUrl })} />
                                    <TouchableOpacity style={globalStyles.blueBGStyle} onPress={() => this.validateUrl()}>
                                        <Text style={globalStyles.whiteTextStyle}>Next</Text>
                                    </TouchableOpacity>
                                </View>
                            </View> : null
                        }
                    </View>
                }
                <Loader show={this.state.loading}></Loader>
            </View>
        );
    }


    generateTokenSignature = (schoolUrl) => {
        // console.log('schoolUrl');
        _this = this;
        const request_data = {
            url: schoolUrl + '/api/2/oauth1.php/request-token',
            method: 'GET',
        };


        params = oauth.authorize(request_data);
        params.oauth_callback = 'x-com-frogtrade-frogprogress-oauth://success'
        var query = Object.keys(params)
            .map(k => k + '=' + params[k])
            .join('&');
        // console.log (params)
        // console.log(query);

        var oauthPath = request_data.url + '?' + query
        // console.log(oauthPath);
        fetch(oauthPath).then(function (response) {

            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ', response.status, response);
                _this.setState({
                    requestToken: null
                })
                return;
            }
            else {
                response.text().then(function (text) {

                    var route = decodeURIComponent(text.substring(text.indexOf('?') + 1))
                    // console.log('handleOpenURL url is: ' + route);
                    var authParams = JSON.parse('{"' + (route).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
                    console.log('params:--> ' + authParams['oauth_token_secret'])

                    _this.setState({
                        redirectUrl: schoolUrl + '/app/oauthconsent' + '?' + text,
                        loadWebView: true,
                        // requestToken: text,
                        oauth_token_secret: authParams['oauth_token_secret']
                    });

                    SharedStorage.storeOAuthSecret(authParams['oauth_token_secret'])
                });
            }
            return response;
        })
    }

    componentDidMount() {
        console.log('component did mount called');
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        Linking.addEventListener('url', this.handleURL.bind(this));


        Linking.getInitialURL().then((url) => {
            console.log(url);
            if (url) {
                console.log('Initial url is: ' + url);

                SharedStorage.retrieveFrogAuth().then((res) => {
                    if(!res){                        
                        Toast.show('Authenticating user', Toast.LONG);
                        this._handleOpenURL(url);
                    }                        
                })
            }
            else{                
                this.checkIfUserAlreadyLogin();
            }
        }).catch(err => console.error('An error occurred', err));
        
    }

    handleURL(event) {
        console.log('****mount called');
        console.log(event.url);

        if (event.url) {
            console.log('Initial url is: ' + event.url);

            SharedStorage.retrieveFrogAuth().then((res) => {
                if(!res){                        
                    Toast.show('Authenticating user', Toast.LONG);
                    this._handleOpenURL(event.url);
                }                        
            })
        }
        else{                
            this.checkIfUserAlreadyLogin();
        }
    }
    //   componentWillUnmount() {
    //     Linking.removeEventListener('url', this._handleOpenURL);
    //   }

    _handleOpenURL(url) {
        console.log(url);
        var urlParams = decodeURIComponent(url.substring(url.indexOf('?') + 1))
        console.log('handleOpenURL url is: ' + urlParams);
        var authParams = JSON.parse('{"' + (urlParams).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
        // this.setState({ callbackURl: authParams })
        console.log(authParams);

        SharedStorage.retrieveSchoolUrl().then((res) => {
            if (res && res.length > 0) {
                // console.log(res);
                SharedStorage.retrieveOAuthSecret().then((secret) => {
                    if (secret && secret.length > 0) {
                        this.callAccessApi(res, secret, authParams)
                    }
                });
            }
        });
        // do something with the url, in our case navigate(route)
    }


    callAccessApi = (schoolUrl, secret, authParams) => {
        _this = this;
        const token = {
            key: authParams.oauth_token,
            secret: secret
        };

        // console.log ('Initial url is: ' + this.state.callbackURl)
        // const callbackUrl = this.state.callbackURl
        const request_data = {
            url: schoolUrl + '/api/2/oauth1.php/access-token',
            method: 'POST',
            data: { oauth_token: authParams.oauth_token, oauth_verifier: authParams.oauth_verifier, oauth_secret: secret }
        };

        console.log('Secret:' + secret);
        console.log('schoolUrl:' + schoolUrl);
        params = oauth1.authorize(request_data, token);
        // params.oauth_token = authParams.oauth_token;
        // params.oauth_verifier = authParams.oauth_verifier;
        console.log(params);

        // var search = decodeURIComponent(callbackUrl.substring(callbackUrl.indexOf('?')+1))
        // console.log(search);
        // var parameters = JSON.parse('{"' + (search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
        // console.log(parameters);
        // var query = Object.keys(params)
        //   .map(k => k + '=' + params[k])
        // .join('&');

        query = "OAuth oauth_consumer_key=\"" + params.oauth_consumer_key + "\", oauth_nonce=\"" + params.oauth_nonce + "\", oauth_signature=\"" + params.oauth_signature + "\", oauth_signature_method=\"HMAC-SHA1\", oauth_timestamp=\"" + params.oauth_timestamp + "\", oauth_token=\"" + params.oauth_token + "\", oauth_verifier=\"" + params.oauth_verifier + "\", oauth_version=\"1.0\"";

        console.log("query while hitting access-api: " + query);
        //query = query.replace(/"/g, '\\"');
        header = {
            // "Accept": "application/json",
            "Accept-Encoding": "*",
            // "Accept-Language" : "en;q=1",
            Authorization: query,
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
            "X-AuthType": "oauth_1_0_a",

        };

        console.log(header);

        //var v = fetch(request_data.url+'?'+query, {

        var v = fetch(request_data.url, {
            method: 'POST',
            headers: header

        }).then((response) => {
            //console.log(res);

            if (response.status !== 200) {
                Toast.show('Looks like there was a problem. Status Code: '+ response.status+' / '+ response, Toast.LONG);
                console.log('Looks like there was a problem. Status Code: ', response.status, response);
                return;
            }
            else {
                response.text().then(function (res) {
                    console.log('ACCESS TOKEN RESPONSE WITH OAUTH TOKEN')
                    console.log(res);
                    console.log('============');
                    // this.setState({ callbackURl: authParams })
                    console.log(authParams);
                    SharedStorage.storeFrogAuth(res);
                    //   SharedStorage.storeFrogSecret(authParams.oauth_token_secret);
                    _this.props.getUserInfo();
                });
            }
        });
    }

}

mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, { ...userActions })(Login);
