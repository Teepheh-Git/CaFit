import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import LinearGradient from 'react-native-linear-gradient';


const CustomButton = ({containerStyle, onPress, text}) => {
    return (
        <TouchableOpacity activeOpacity={0.5} style={[styles.container, {...containerStyle}]} onPress={onPress}>
            <LinearGradient style={styles.root} colors={[COLORS.orange, COLORS.orange2]}>
                <Text style={styles.text}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default CustomButton;


const styles = StyleSheet.create({


    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 50,
        width: SIZES.width,

    },
    root: {
        width: '90%',
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.radius2,
    },
    text: {
        color: COLORS.white,
        ...FONTS.h5,
    },
});
