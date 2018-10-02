import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;



import React, { Component } from 'react';


import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const Button = (props) => {
    function getContent(){

        return <Text style={[
                props.defaultStyles ? props.defaultStyles : styles.labelStyle]}
            >{props.label}</Text>
    }

    return (
        <TouchableOpacity
            onPress={props.onPress}
            disabled={props.disabled}
            style={[
                props.defaultStyles ?   props.defaultStyles : styles.button
            ]}
        >
        { getContent() }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    labelStyle: {
        fontSize: moderateScale(14),
        color:'white',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: moderateScale(40),
        width: moderateScale(60),
        backgroundColor : 'blue',
        color:'red'
    },
});

export default Button;
