
import React, { Component } from 'react';
import {
  View,
  WebView,Linking, 
} from 'react-native';
import CookieManager from 'react-native-cookies';

import * as SharedStorage from '../../storage/SharedStorage';


class AuthWebView extends Component {
    state = {
      cookies    : {},
      webViewUrl : ''
    }

    constructor(props){
        super(props);
        // console.log(this.props.schoolUrl);
        this.onNavigationStateChange = this.onNavigationStateChange.bind(this);
    }

  
    onNavigationStateChange = (webViewState) => {
      const { url } = webViewState;
      console.log(url);
  
      if(url.includes('http')) {
        this.setState({ webViewUrl: url })
      }
  
      const check = "//success"; //"app/os";
      if(url.indexOf(check) > 0){
        // this.props.navigation.pop();
        // CookieManager.get(url).then((res) => {
        //   // console.log('CookieManager.get =>', res.frogos_auth);
        //   SharedStorage.storeFrogAuth(res.frogos_auth);

        //   this.props.onTokenReceived();
        // });
      }
    }
  
    render() {
        // const url = this.props.schoolUrl + "/app/mobileapplogout";
      return (
        <View style={{flex: 1}}>
          <WebView
            source={{ uri: this.props.schoolUrl }}
            onNavigationStateChange={this.onNavigationStateChange}
            onMessage={this._onMessage}
            javaScriptEnabled={true}
            // injectedJavaScript={`console.log('hello');`}
            mixedContentMode={'compatibility'}
            thirdPartyCookiesEnabled={true}
            style={{ flex: 1 }}
          />
        </View>
      );
    }
  }
  
  export default AuthWebView;