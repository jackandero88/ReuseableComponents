import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import RoundCheckbox from '../../custom-components/RoundCheckbox';

import globalStyles from '../../../themes/global/styles/styles';
import themeStyle from "../../../themes/global/theme.style";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class StudentListItem extends React.Component {

    constructor(props){
        super(props);
        // console.log(this.props);
        // const { navigation } = this.props;
        this.state = {
            item: this.props.item,
            addDocument: false
        };
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){
        
    }

    onPressJudgementOption = () => {

        //Open Judgement Screen
        console.log (this.state.item)
        console.log(this.props);
        this.props.navigation.navigate('SetJudgement',{currentJudgement:'54BD732E200A4DD528CD9F420735D60D9B9CE18C411E0E51'});
      }

    render(){
      return (
          <View style={[globalStyles.flexColumn, globalStyles.cardStyle]}>
            <View style={ [globalStyles.flexRow, globalStyles.noPadding]}>
                <View style={[styles.innerItemHolderStyle]}>
                <RoundCheckbox
                    checked={this.state.item.isChecked}
                    onValueChange={(newValue) => {
                        this.state.item.isChecked = newValue;
                        this.setState({
                            item: this.state.item
                        })
                        this.props.onStudentChecked(this.props.index, this.state.item.isChecked);
                    }}
                    />
                <Text style={styles.textStyle} onPress={() => this.setState({addDocument: !this.state.addDocument})}>
                    {this.props.item.displayname} 
                    {/* - {JSON.stringify(this.props.item.judgement)} */}
                </Text>
                </View>
                <View style={styles.judgementIcon}>
                </View>
            </View>
            {
                this.state.addDocument ?
                    <View style={[globalStyles.flexRow, globalStyles.paddingLeft10, globalStyles.paddingRight10, globalStyles.paddingBottom10, { justifyContent: 'space-between'}]}>
                        <TouchableOpacity style={[globalStyles.blueBGStyle, globalStyles.flex]}>
                            <Icon name='image' style={{ color: '#fff',fontSize: themeStyle.FONT_SIZE_EXTRA_LARGE}}  />     
                        </TouchableOpacity>
                        <TouchableOpacity style={[globalStyles.blueBGStyle, globalStyles.flex, globalStyles.marginLeft10]}>
                            <Icon name='file-document' style={globalStyles.whiteIconStyle}  />     
                        </TouchableOpacity>
                        <TouchableOpacity style={[globalStyles.blueBGStyle, globalStyles.flex, globalStyles.marginLeft10]}
                        onPress={() => this.onPressJudgementOption()}>
                            <Icon name='checkbox-blank-circle-outline' style={globalStyles.whiteIconStyle}  />     
                        </TouchableOpacity>
                    </View> : null
            }
        </View>
      );
    }
}

export default StudentListItem;

const styles = StyleSheet.create({
    innerItemHolderStyle: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginBottom: 0
    },
    textStyle:{
        flex:1,
        backgroundColor: themeStyle.WHITE_COLOR,
        alignSelf: 'stretch',
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
    judgementIcon: {
        borderWidth: 4,
        width: 20,
        height: 20,
        borderColor: themeStyle.LIGHT_GREY_COLOR,
        borderRadius: 10,
        justifyContent: 'center', 
        alignSelf: 'center' ,
        marginRight: 10,
    }
});