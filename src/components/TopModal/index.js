import React, {useState} from 'react';
import {Animated, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {toggleTheme} from '../../stores/themeActions';
import {connect} from 'react-redux';
import {Calendar} from 'react-native-calendars';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';
import {Svg4} from '../../constants/Svg';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const TopModal = ({appTheme}) => {

    const [modalY, setModalY] = useState(new Animated.Value(-H));

    const [selectedDay, setSelectedDay] = useState('');

    const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
    const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
    const workout = {key: 'workout', color: 'green'};

    const date = new Date();

    const day = date.getDay();
    const month = date.getMonth();
    const daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


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
                <Calendar
                    onDayPress={(day) => {
                        console.log(day);
                    }}
                    hideArrows={true}
                    style={{top: 220}}
                    enableSwipeMonths={true}
                    hideDayNames={true}
                    markingType={'custom'}
                    renderHeader={(date) => {
                        return (
                            <View style={{
                                width: SIZES.width,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>

                                <TouchableOpacity
                                    onPress={() => {
                                        closeModal();
                                    }}
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 56,
                                        width: 56,
                                        // left: 10,
                                        margin: 10,
                                        borderRadius: 35,
                                        borderColor: appTheme.textColor2,
                                        borderWidth: 0.3,
                                    }}>
                                    <Image source={icons.leftArrow}
                                           style={{tintColor: appTheme.textColor2, height: 20, width: 20}}/>
                                </TouchableOpacity>
                                <View style={{alignItems: 'center', justifyContent: 'center', right: 120}}>
                                    <Text style={{color: appTheme.textColor2, ...FONTS.body4}}>{daylist[day]}, </Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={{color: appTheme.textColor, ...FONTS.h2}}>{date.getDate()} </Text>
                                        <Text style={{color: appTheme.textColor, ...FONTS.h2}}>{monthList[month]}</Text>
                                    </View>

                                </View>
                            </View>

                        );
                    }}
                    markedDates={{
                        '2021-09-18': {
                            customStyles: {
                                container: {
                                    backgroundColor: 'transparent',
                                },
                                text: {
                                    color: appTheme.textColor,
                                    textDecorationLine: 'underline',
                                    textDecorationColor: COLORS.green,
                                    textDecorationStyle: 'solid',
                                },
                            },
                        },
                        '2021-09-29': {
                            customStyles: {
                                container: {
                                    backgroundColor: 'transparent',
                                    elevation: 2,
                                },
                                text: {
                                    color: appTheme.textColor,
                                    textDecorationLine: 'underline',
                                    textDecorationColor: COLORS.orange,
                                    textDecorationStyle: 'solid',
                                },
                            },
                        },
                        '2021-09-21': {
                            customStyles: {
                                container: {
                                    backgroundColor: COLORS.CustomOrange,
                                    elevation: 2,
                                },
                                text: {
                                    color: appTheme.textColor,
                                },
                            },
                        },

                    }}
                    theme={{
                        // backgroundColor: appTheme.backgroundColor,
                        calendarBackground: appTheme.backgroundColor2,
                        textSectionTitleColor: '#b6c1cd',
                        textSectionTitleDisabledColor: '#d9e1e8',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: 'red',
                        todayTextColor: appTheme.textColor,
                        dayTextColor: appTheme.textColor,
                        textDisabledColor: COLORS.transparentWhite,
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: 'orange',
                        disabledArrowColor: '#d9e1e8',
                        // monthTextColor: 'blue',
                        // indicatorColor: 'blue',
                        textDayFontWeight: 'normal',
                        textMonthFontWeight: 'normal',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 14,
                        textMonthFontSize: 12,
                        textDayHeaderFontSize: 16,
                    }}
                />

                {/*<Svg4 />*/}

            </Animated.View>
        );

    }


    return (
        <View style={{
            flex: 1,
            backgroundColor: appTheme.backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <TouchableOpacity onPress={openModal} style={styles.button}>
                <Text style={styles.buttonText}>Show</Text>
            </TouchableOpacity>
            {Modal()}
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'blue',
        alignItems: 'center',
        height: 30,
        width: 50,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
    },
    modal: {
        height: H,
        width: W,
        position: 'absolute',
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
