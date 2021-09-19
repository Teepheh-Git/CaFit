import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {FONTS, SIZES} from '../../constants/theme';
import {connect} from 'react-redux';

const OnBoardingItem = ({item, appTheme}) => {
    return (
        <View style={styles.wrapper}>
            <Image style={styles.img} resizeMode={'contain'} source={item.image}/>
            <Text style={[styles.title, {color: appTheme.textColor}]}>{item.title}</Text>
        </View>
    );
};


const styles = StyleSheet.create({

    wrapper: {
        width: SIZES.width,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: SIZES.width * 0.9,
        height: SIZES.width * 0.9,
        marginVertical: 20,
        bottom: 25,
    },
    title: {
        ...FONTS.h1,
    },
});


export function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
        error: state.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(OnBoardingItem);

