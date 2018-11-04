import React, { Component } from 'react';
import { AppRegistry, View, ScrollView, Text, StyleSheet, Platform, TouchableOpacity,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import globalStyles from '../../themes/global/styles/styles';

class SetJudgement extends Component{


    constructor(props){
        super(props);
        const { navigation } = this.props;
        this.currentJudgement = this.props.navigation.getParam('currentJudgement');
        // console.log(this.props);
        // const { navigation } = this.props;
       
        //    this.items = ['red', 'green', 'black', 'yellow', 'purple'];
            this.items = [
                {
                  "uuid": "54BD7338200A4CE6C5193F7E14F4A50056B9D3CCD63D751F",
                  "name": "Not on Track",
                  "value": "0.00",
                  "colour": "D78F2B",
                  "is_editable": true,
                  "created_on": "1537428342",
                  "created_by": null,
                  "display_order": "0",
                  "is_target": false,
                  "has_events": true
                },
                {
                  "uuid": "54BD732E200A4DD528CD9F420735D60D9B9CE18C411E0E51",
                  "name": "On Track",
                  "value": "1.00",
                  "colour": "80BE13",
                  "is_editable": true,
                  "created_on": "1537428342",
                  "created_by": null,
                  "display_order": "1",
                  "is_target": true,
                  "has_events": true
                },
                {
                  "uuid": "4C38B1BF200A45E93A81BFEE04FA39086E4593DC802E2578",
                  "name": "Got it!",
                  "value": "1.00",
                  "colour": "A020F0",
                  "is_editable": true,
                  "created_on": "1537428571",
                  "created_by": null,
                  "display_order": "2",
                  "is_target": false,
                  "has_events": true
                },
                {
                  "uuid": "3A1BF5E1200A41BD04557F27708217039D25A3ECE4BCAF58",
                  "name": "Where you should be",
                  "value": "0.50",
                  "colour": "431010",
                  "is_editable": true,
                  "created_on": "1538734619",
                  "created_by": "4C6E03902000555B881CFF00BA9CAA0D1C10411C68F43B9C",
                  "display_order": "3",
                  "is_target": false,
                  "has_events": null
                },
                {
                  "uuid": "3A1BF70C200A4487C10C2F56BD2C0908AA1322FC665B7743",
                  "name": "Not where you should be",
                  "value": "0.50",
                  "colour": "47bd5f",
                  "is_editable": true,
                  "created_on": "1538734619",
                  "created_by": "4C6E03902000555B881CFF00BA9CAA0D1C10411C68F43B9C",
                  "display_order": "4",
                  "is_target": false,
                  "has_events": null
                },
                {
                  "uuid": "3A1BF75A200A41A6F8182F0DB8A02F0097860D0CF8E86A60",
                  "name": "Track on Time!!",
                  "value": "1.00",
                  "colour": "d23030",
                  "is_editable": true,
                  "created_on": "1538734619",
                  "created_by": "4C6E03902000555B881CFF00BA9CAA0D1C10411C68F43B9C",
                  "display_order": "5",
                  "is_target": false,
                  "has_events": null
                },
                {
                  "uuid": "3A1BF7A0200A4EC451E20F0AFAC1E501AE75B53C96D6FAF2",
                  "name": "Be on Time",
                  "value": "1.00",
                  "colour": "bb6666",
                  "is_editable": true,
                  "created_on": "1538734619",
                  "created_by": "4C6E03902000555B881CFF00BA9CAA0D1C10411C68F43B9C",
                  "display_order": "6",
                  "is_target": false,
                  "has_events": null
                }
              ];
    }
    backClick(){
        // console.log('back clicked');
        this.props.navigation.pop();
    }

    judgementSelectionPressed = (item) =>
    {

        Alert.alert(
            item.name,
            item.uuid,
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
    }


    componentDidMount(){


        console.log(this.currentJudgement);
    }

    render ()
    {
      return(
        <View style = { globalStyles.judgementContainer }>
        <View style={ globalStyles.headerStyle }>
                    <Icon name='close-box' style={globalStyles.backButtonStyle} onPress={() => this.backClick() }  />
                    <Text style={globalStyles.headerTitleStyle}>
                        Set Judgement for ***
                    </Text>
                </View>
        <View style = { styles.container }>
           <ScrollView horizontal = { true } showsHorizontalScrollIndicator = { false }>
           
            {
                this.items.map(( item, key ) =>
                    <View key = { key } style={{flex: 1, alignItems: 'center', paddingRight: 15}}>
                        <TouchableOpacity onPress={() => this.judgementSelectionPressed(item)}>
                
                        {
                            item.uuid === this.currentJudgement ?
                            <View style={[styles.SolidCircle, {backgroundColor:'#'+item.colour}]} />
                            :
                            <View style={[styles.HollowCircle, {borderColor:'#'+item.colour}]} />
                        }
                    
                        </TouchableOpacity>
                        <Text style =  {styles.judgementText}>
                            {item.name}
                        </Text>
                    </View>
                )
            }
           </ScrollView>
        </View>
     </View>
      );
    }
}
//  <Icon name='checkbox-blank-circle-outline' style={[styles.circleIconStyle, {color: '#'+item.colour} ]} />
const styles = StyleSheet.create(
    {
        container:
        {
           paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
           flex: 1,
           flexDirection: 'row',
           justifyContent: 'center',
            alignItems: 'center'
           
        },
        circleIconStyle: { 
            fontSize: 90
        },
        scrollViewHolder:
        {
           borderTopWidth: 2,
           borderBottomWidth: 2,
           borderTopColor: 'rgba(0,0,0,0.5)',
           borderBottomColor: 'rgba(0,0,0,0.5)'
        },
      
        item:
        {
           padding: 0,
           height: 90,
           width:90,
           paddingRight: 30
        },
        judgementText: {
            fontSize: 15,
            color: 'white',
            width: 142,
            textAlign: 'center',
            paddingTop:30

        },
        HollowCircle: {
            backgroundColor:'transparent',
            width: 90,
            height: 90,
            borderRadius: 45,
            borderWidth: 15
          },
          SolidCircle: {
            width: 90,
            height: 90,
            borderRadius: 45          }

    });

    export default SetJudgement
