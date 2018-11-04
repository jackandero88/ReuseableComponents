import React from "react";
import { View, Text, WebView } from "react-native";

import { oauth } from './../auth/auth';

export default class AuthLoginView extends React.Component {

    componentDidMount(){
        this.generateTokenSignature();
    }

    generateTokenSignature = () => {
        const request_data = {
            url: this.props.schoolUrl+'/api/2/oauth1.php/request-token',
            method: 'POST',
            // data: { oauth_callback: 'x-com-frogtrade-frogprogress-oauth://success'}
        };

        
        params = oauth.authorize(request_data);
        var query = Object.keys(params)
        .map(k => k + '=' + params[k])
        .join('&');
        console.log (params)
        console.log(query);

        var oauthPath  = request_data.url + '?' + query
        fetch(oauthPath).then(function(response) {
    
    
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ',   response.status, response);
                _this.setState({
                  requestToken: null
              })
              return;
            }
            else
            {
              response.text().then(function (text) {
                console.log(text)
        
                var route = decodeURIComponent(text.substring(text.indexOf('?')+1))
              console.log('handleOpenURL url is: ' + route);
              var authParams = JSON.parse('{"' + (route).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
              console.log ('params:--> ' +  authParams['oauth_token_secret'])
                  _this.setState({
                    requestToken: text,
                    oauth_token_secret:authParams['oauth_token_secret']
                })
                console.log (this.state.requestToken);
              });
            }
            return response;
          })
    }
    render(){
        return <View>
            <Text>Hello There</Text>
        </View>
    }
}