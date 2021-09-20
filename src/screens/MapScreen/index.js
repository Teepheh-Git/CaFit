import React from 'react';
import {Text, View} from 'react-native';
import {toggleTheme} from '../../stores/themeActions';
import {connect} from 'react-redux';

const MapScreen = ({appTheme}) => {
    return (
        <View style={{flex: 1, backgroundColor: appTheme.backgroundColor, justifyContent: 'center'}}>
            <Text style={{color: appTheme.textColor}}>Map Screen</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
