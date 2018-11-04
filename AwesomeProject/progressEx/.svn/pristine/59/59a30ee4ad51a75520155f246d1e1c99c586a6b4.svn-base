
import React, { Component } from 'react';
import {
  View,
  WebView, 
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import CookieManager from 'react-native-cookies';
import Icon from 'react-native-vector-icons/FontAwesome';

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

        CookieManager.clearAll();
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
          <TouchableOpacity style={styles.closeButton} onPress={() => this.props.closeAuthWebView() }>
            <Image source={require('./../../assets/icons/ic_close_white.png')} resizeMode='center' style={styles.closeButtonIcon} />
          </TouchableOpacity>
        </View>
      );
    }
  }
  
  export default AuthWebView;

  const styles = StyleSheet.create({
    closeButton: {
      backgroundColor: '#D31246',
      // padding:10,
      width:60,
      height: 60,
      position: 'absolute',
      right:0,
      top:0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    closeButtonIcon: {
      width: 30,
      height:30,
    }
  });