import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {toggleTheme} from '../../stores/themeActions';
import {FONTS} from '../../constants/theme';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = ({appTheme, toggleTheme}) => {

    const navigation = useNavigation();

    function toggleThemeHandler() {
        if (appTheme.name === 'light') {
            toggleTheme('dark');
        } else {
            toggleTheme('light');
        }
    }


    return (
        <View style={[styles.root, {backgroundColor: appTheme.backgroundColor}]}>

            <Image resizeMode={'contain'} style={styles.img} source={require('../../assets/images/Brand/Logo.png')}/>
            <Image resizeMode={'contain'} style={styles.img2}
                   source={require('../../assets/images/WalkThrough/Illustration1.png')}/>
            <Text style={[styles.text, {color: appTheme.textColor}]}>Welcome to CaFit</Text>
            <Text style={[styles.text2, {color: appTheme.textColor2}]}>We need to work out safely during Covid-19 and
                CaFit is here to help</Text>

            <CustomButton text={'Let\'s Walk'} onPress={() => toggleThemeHandler()}/>
            <CustomButton text={'Let\'s Walk'} onPress={() => navigation.navigate('OnBoardScreen')}/>

        </View>
    );
};

const styles = StyleSheet.create({


    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    img: {
        height: 80,
        width: 80,

    }, img2: {
        height: 200,
        width: 200,
        top: 40,

    },
    text: {
        top: 40,
        ...FONTS.h1,
    },
    text2: {
        ...FONTS.body3,
        textAlign: 'center',
        width: '70%',
    },
});


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

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);





