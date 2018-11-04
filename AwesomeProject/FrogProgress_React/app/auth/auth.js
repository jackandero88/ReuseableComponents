const OAuth = require('oauth-1.0a');
var oauthSignature = require('oauth-signature');

import * as Constants from './../constants/constants';
 
const oauth = OAuth({
  
    consumer: { key: Constants.CONSUMER_KEY, secret: Constants.CONSUMER_SECRET}, // React native Progress keys
    
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {

        initialSeparator = base_string.indexOf('&');
        var basePath = decodeURIComponent( base_string.substring(initialSeparator+1, base_string.indexOf('&', 5)))
        var search = decodeURIComponent(base_string.substring(base_string.indexOf('&', 5)+1))

        // console.log(basePath);
        // console.log(search);

        var parameters = JSON.parse('{"' + (search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
        var tokenSecret = parameters.oauth_secret;
        // console.log(tokenSecret);

        if(basePath.indexOf('request-token') > 0)
            parameters.oauth_callback = 'x-com-frogtrade-frogprogress-oauth://success'
        // console.log(parameters);

        if(tokenSecret){     
            delete parameters.oauth_secret
            basePath = encodeURIComponent (basePath);
            encodedSignature = oauthSignature.generate('POST', basePath, parameters, Constants.CONSUMER_SECRET, tokenSecret, { encodeSignature: false})
        }
        else
            encodedSignature = oauthSignature.generate('GET', basePath, parameters, Constants.CONSUMER_SECRET)
        encodedSignature = decodeURIComponent(encodedSignature)
        // console.log(encodedSignature);
        return encodedSignature;
    }
})




const oauth1 = OAuth({
  
    consumer: { key:  Constants.CONSUMER_KEY, secret: Constants.CONSUMER_SECRET}, // React native Progress keys
     
    signature_method: 'HMAC-SHA1',
     hash_function(base_string, key) {
    //    console.log(decodeURIComponent(base_string));
   

       initialSeparator = base_string.indexOf('&');
       initialSeparator = base_string.indexOf('&');
       var methodType = base_string.substring(0, initialSeparator);
       var basePath = decodeURIComponent( base_string.substring(initialSeparator+1, base_string.indexOf('&', 5)))
    //    console.log(basePath);

    //    //React native keys
    //    consumerKey = 'qj9dvvss3bogrryquze5c52alzxyjlnf'
    //    consumerSecret = 'j4uff38y4qg88j0edxyf7dep4dn095whsia9ms5e'
   
       var search = decodeURIComponent(base_string.substring(base_string.indexOf('&', 5)+1))
    //    console.log(search);
  
       var parameters = JSON.parse('{"' + (search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
    //    console.log(parameters);

       if(parameters.sections)
        parameters.sections = decodeURIComponent(parameters.sections);
  
       var tokenSecret = parameters.oauth_secret;
  
       delete parameters.oauth_secret
    //    console.log(parameters);
       var encodedURI = encodeURIComponent (basePath);
      
    //    console.log("basePath while generating signature: " + basePath);
    //    console.log("encodedURI while generating signature: " + encodedURI);
    //    console.log(parameters);
    //    console.log("consumerSecret while generating signature: " + Constants.CONSUMER_SECRET);
    //    console.log("tokenSecret while generating signature: " + tokenSecret);
   
       // generates a RFC 3986 encoded, BASE64 encoded HMAC-SHA1 hash
       //encodedSignature = oauthSignature.generate('GET', basePath, parameters, consumerSecret, tokenSecret);
       encodedSignature = oauthSignature.generate(methodType, basePath, parameters, Constants.CONSUMER_SECRET, tokenSecret,
      { encodeSignature: false})
  
    //    console.log("encodedSignature : " + encodedSignature);
        encodedSignature = decodeURIComponent(encodedSignature)
        // console.log("decodedSignature : " + encodedSignature);
        
       return encodedSignature;
     }
   });
   
  
   

const oauth2 = OAuth({
  
    consumer: { key: 'qj9dvvss3bogrryquze5c52alzxyjlnf', secret: 'j4uff38y4qg88j0edxyf7dep4dn095whsia9ms5e'}, // React native Progress keys
     
    signature_method: 'HMAC-SHA1',
     hash_function(base_string, key) {
    //    console.log("CALLING oauth2");
    //    console.log(decodeURIComponent(base_string));
   
       initialSeparator = base_string.indexOf('&');
       var methodType = base_string.substring(0, initialSeparator);
    //    console.log(methodType);
       var basePath = decodeURIComponent( base_string.substring(initialSeparator+1, base_string.indexOf('&', 5)))
    //    console.log(basePath);
   
       //React native keys
       consumerKey = 'qj9dvvss3bogrryquze5c52alzxyjlnf'
       consumerSecret = 'j4uff38y4qg88j0edxyf7dep4dn095whsia9ms5e'
   
       var search = decodeURIComponent(base_string.substring(base_string.indexOf('&', 5)+1))
    //    console.log(search);
  
       var parameters = JSON.parse('{"' + (search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
    //    console.log(JSON.stringify(parameters));
       var tokenSecret = parameters.oauth_secret;
        
       parameters.sections = decodeURIComponent(parameters.sections);
    //    console.log(JSON.stringify(parameters));

    // parameters = {
    //     oauth_consumer_key : 'qj9dvvss3bogrryquze5c52alzxyjlnf',
    //     oauth_token : '358a8c19aea5461784ad8ccf50dc6d9efd396211',
    //     oauth_nonce : 'd2c4045118b46be30bd20c3d9578f4b9',
    //     oauth_timestamp : '1538132437',
    //     oauth_signature_method : 'HMAC-SHA1',
    //     oauth_version : '1.0',
    //     // 
    // }

    //    var params1 = JSON.parse('{"' + (search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
    //    var tokenSecret = params1.oauth_secret;
    //    var tokenSecret = 'd4530fd790db8f0060cdbf28587a6987c9fb0f64';// parameters.oauth_secret;
  
       delete parameters.oauth_secret
    //    delete parameters.sections;
    //    delete parameters.uuid;
    //    delete parameters.year_uuid;
    //    console.log(parameters);
       var encodedURI = encodeURIComponent (basePath);
      
    //    console.log("basePath while generating signature: " + basePath);
    //    console.log("encodedURI while generating signature: " + encodedURI);
    //    console.log(parameters);
    //    console.log("consumerSecret while generating signature: " + consumerSecret);
    //    console.log("tokenSecret while generating signature: " + tokenSecret);
   
       // generates a RFC 3986 encoded, BASE64 encoded HMAC-SHA1 hash
       //encodedSignature = oauthSignature.generate('GET', basePath, parameters, consumerSecret, tokenSecret);
       encodedSignature = oauthSignature.generate(methodType, basePath, parameters, consumerSecret, tokenSecret,
       { encodeSignature: false})
  
    //    console.log("encodedSignature : " + encodedSignature);
        encodedSignature = decodeURIComponent(encodedSignature)
        // console.log("decodedSignature : " + encodedSignature);
        
       return encodedSignature;
    //    return "LUnOnbaVAtSnVmO8s6qqD+QTpQc=";
     }
   });
   

export { oauth, oauth1, oauth2 };