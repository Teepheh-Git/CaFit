import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {toggleTheme} from '../../stores/themeActions';
import {connect} from 'react-redux';
import {Calendar} from 'react-native-calendars';
import icons from '../../constants/icons';
import {COLORS, FONTS, SIZES} from '../../constants/theme';


const MapScreen = ({appTheme}) => {

    console.log(Date());

    return (

        <View style={{flex: 1, backgroundColor: appTheme.backgroundColor, justifyContent: 'center'}}>



        </View>

    );
};

const styles = StyleSheet.create({});


export function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
        error: state.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleTheme: (themeType) => {
            return dispatch(toggleTheme(themeType));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
