import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {toggleTheme} from '../../stores/themeActions';
import {connect} from 'react-redux';
import {Calendar} from 'react-native-calendars';
import icons from '../../constants/icons';
import {FONTS, SIZES} from '../../constants/theme';


const MapScreen = ({appTheme}) => {
    const [selectedDay, setSelectedDay] = useState(Date());

    const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
    const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
    const workout = {key: 'workout', color: 'green'};

    const date = new Date();

    const day = date.getDay();
    const month = date.getMonth();
    const daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    console.log(Date());

    return (

        <View style={{flex: 1, backgroundColor: appTheme.backgroundColor, justifyContent: 'center'}}>

            <View style={{
                width: SIZES.width,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>

                <TouchableOpacity
                    onPress={() => {
                    }}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 56,
                        width: 56,

                        left: 10,
                        margin: 10,
                        borderRadius: 35,
                        borderColor: appTheme.textColor2,
                        borderWidth: 0.3,
                    }}>
                    <Image source={icons.leftArrow} style={{tintColor: appTheme.textColor, height: 40, width: 40}}/>
                </TouchableOpacity>
                <View style={{alignItems: 'center', justifyContent: 'center', right: 120}}>
                    <Text style={{color: appTheme.textColor2, ...FONTS.body4}}>{daylist[day]}, </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: appTheme.textColor, ...FONTS.h2}}>{date.getDate()} </Text>
                        <Text style={{color: appTheme.textColor, ...FONTS.h2}}>{monthList[month]}</Text>
                    </View>

                </View>
            </View>

            <Calendar
                onDayPress={(day) => {
                    console.log('selected day', day);
                }}
                hideArrows={true}
                enableSwipeMonths={true}
                markingType={'multi-dot'}
                markedDates={{
                    '2021-09-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
                    '2021-09-16': {dots: [massage, workout], disabled: true},
                    '2021-09-30': {dots: [massage, workout], disabled: true},
                }}
                theme={{
                    backgroundColor: 'white',
                    calendarBackground: 'white',
                    textSectionTitleColor: '#b6c1cd',
                    textSectionTitleDisabledColor: '#d9e1e8',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    arrowColor: 'orange',
                    disabledArrowColor: '#d9e1e8',
                    monthTextColor: 'blue',
                    indicatorColor: 'blue',
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16,
                }}
            />
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
