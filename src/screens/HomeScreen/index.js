import React from 'react';
import {View} from 'react-native';
import {toggleTheme} from '../../stores/themeActions';
import {connect} from 'react-redux';
import TopModal from '../../components/TopModal';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

const HomeScreen = ({appTheme}) => {
    return (
        <View style={{flex: 1, backgroundColor: appTheme.backgroundColor, justifyContent: 'center'}}>
            <TopModal/>


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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
