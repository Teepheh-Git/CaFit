import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {toggleTheme} from '../../stores/themeActions';
import CustomButton from '../../components/CustomButton';

const WelcomeScreen = ({appTheme}) => {

    return (
        <View style={{flex: 1, backgroundColor: appTheme.backgroundColor}}>
            <Text style={{color: appTheme.textColor}}>Welcome Screen</Text>

        </View>
    );
};


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


// function toggleThemeHandler() {
//     if (appTheme.name === 'dark') {
//         toggleTheme('light');
//     } else {
//         toggleTheme('dark');
//     }
// }


// <TouchableOpacity
//     onPress={() => toggleThemeHandler()}
//     style={{
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'flex-end',
//         marginHorizontal: 20,
//         height: 30,
//         borderRadius: 20,
//         backgroundColor: COLORS.lightPink,
//     }}>
//
//     <Text style={{color: appTheme.textColor}}>switch</Text>
//
// </TouchableOpacity>

