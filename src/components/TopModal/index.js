import React, {useState} from 'react';
import {Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {toggleTheme} from '../../stores/themeActions';
import {connect} from 'react-redux';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const TopModal = ({appTheme}) => {

    const [modalY, setModalY] = useState(new Animated.Value(-H));

    function openModal() {
        Animated.timing(modalY, {
            duration: 800,
            toValue: -H / 2,
        }).start();
    }


    function closeModal() {
        Animated.timing(modalY, {
            duration: 800,
            toValue: -H,
        }).start();
    }


    function Modal() {
        return (
            <Animated.View
                style={[styles.modal, {backgroundColor: appTheme.backgroundColor2}, {transform: [{translateY: modalY}]}]}>

                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={'100%'}
                    height={61}
                    viewBox="0 0 90 61"
                >
                    <Path
                        d="M0 0a38.742 38.742 0 0113 7c5.313 4.4 6.7 8.593 12 13 5.993 4.98 12.987 8 20 8s14.007-3.02 20-8c5.3-4.408 6.687-8.6 12-13a38.742 38.742 0 0113-7v61H0V0z"
                        fill="#4d4d4d"
                        fillRule="evenodd"
                    />
                </Svg>


                <Text style={styles.buttonText}>Show Modal</Text>
                <Text style={styles.buttonText}>Show Modal</Text>
                <Text style={styles.buttonText}>Show Modal</Text>
                <Text style={styles.buttonText}>Show Modal</Text>
                <Text style={styles.buttonText}>Show Modal</Text>
                <Text style={styles.buttonText}>Show Modal</Text>
                <TouchableOpacity onPress={closeModal} style={styles.button}>
                    <Text style={styles.buttonText}>Close Modal</Text>

                </TouchableOpacity>

            </Animated.View>
        );

    }


    return (
        <View style={{flex: 1, backgroundColor: appTheme.backgroundColor, justifyContent: 'center'}}>

            <TouchableOpacity onPress={openModal} style={styles.button}>
                <Text style={styles.buttonText}>Show Modal</Text>
            </TouchableOpacity>
            {Modal()}
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'blue',
        alignItems: 'center',
        height: 30,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
    },
    modal: {
        height: H,
        width: W,
        position: 'absolute',
        top: 0,
        left: 0,
        // backgroundColor: 'gray',
        justifyContent: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
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

export default connect(mapStateToProps, mapDispatchToProps)(TopModal);
