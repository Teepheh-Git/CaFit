import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import SocialScreen from '../screens/SocialScreen';
import RewardScreen from '../screens/RewardScreen';
import {Image, Platform, Text, View} from 'react-native';
import {COLORS, FONTS} from '../constants/theme';
import icons from '../constants/icons';
import {toggleTheme} from '../stores/themeActions';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const BottomTab = ({appTheme}) => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: appTheme.backgroundColor,
                    borderTopColor: 'transparent',
                    height: Platform.OS === 'android' ? 60 : 80,
                },
            }}>
            <Tab.Screen
                name={'Home'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => {
                        if (focused) {
                            return (
                                <View
                                    style={{
                                        alignItems: 'center',
                                        height: 50,
                                        justifyContent: 'space-around',
                                    }}>
                                    <Text
                                        style={{...FONTS.h4, color: appTheme.textColor, top: 20}}>
                                        Home
                                    </Text>
                                    <Text style={{...FONTS.largeTitle, color: COLORS.orange}}>
                                        .
                                    </Text>
                                </View>
                            );
                        } else {
                            return (
                                <Image
                                    source={icons.home}
                                    resizeMode="contain"
                                    style={{
                                        width: 30,
                                        height: 30,
                                        tintColor: COLORS.grey,
                                    }}
                                />
                            );
                        }
                    },
                }}
            />

            <Tab.Screen
                name={'Map'}
                component={MapScreen}
                options={{
                    tabBarIcon: ({focused}) => {
                        if (focused) {
                            return (
                                <View
                                    style={{
                                        alignItems: 'center',
                                        height: 50,
                                        justifyContent: 'space-around',
                                    }}>
                                    <Text
                                        style={{...FONTS.h4, color: appTheme.textColor, top: 20}}>
                                        Map
                                    </Text>
                                    <Text style={{...FONTS.largeTitle, color: COLORS.orange}}>
                                        .
                                    </Text>
                                </View>
                            );
                        } else {
                            return (
                                <Image
                                    source={icons.map}
                                    resizeMode="contain"
                                    style={{
                                        width: 30,
                                        height: 30,
                                        tintColor: COLORS.grey,
                                    }}
                                />
                            );
                        }
                    },
                }}
            />
            <Tab.Screen
                name={'Middle'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    height: 50,
                                    justifyContent: 'space-around',
                                }}>
                                <LinearGradient
                                    style={{
                                        width: 70,
                                        height: 70,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        bottom: 30,
                                        borderRadius: 35,
                                    }}
                                    colors={[COLORS.orange, COLORS.orange2]}>
                                    <Image
                                        source={icons.play}
                                        style={{width: 30, height: 30, tintColor: COLORS.white}}
                                    />
                                </LinearGradient>
                            </View>
                        );
                    },
                }}
            />

            <Tab.Screen
                name={'Social'}
                component={SocialScreen}
                options={{
                    tabBarIcon: ({focused}) => {
                        if (focused) {
                            return (
                                <View
                                    style={{
                                        alignItems: 'center',
                                        height: 50,
                                        justifyContent: 'space-around',
                                    }}>
                                    <Text
                                        style={{...FONTS.h4, color: appTheme.textColor, top: 20}}>
                                        Social
                                    </Text>
                                    <Text style={{...FONTS.largeTitle, color: COLORS.orange}}>
                                        .
                                    </Text>
                                </View>
                            );
                        } else {
                            return (
                                <Image
                                    source={icons.social}
                                    resizeMode="contain"
                                    style={{
                                        width: 30,
                                        height: 30,
                                        tintColor: COLORS.grey,
                                    }}
                                />
                            );
                        }
                    },
                }}
            />

            <Tab.Screen
                name={'RewardScreen'}
                component={RewardScreen}
                options={{
                    tabBarIcon: ({focused}) => {
                        if (focused) {
                            return (
                                <View
                                    style={{
                                        alignItems: 'center',
                                        height: 50,
                                        justifyContent: 'space-around',
                                    }}>
                                    <Text
                                        style={{...FONTS.h4, color: appTheme.textColor, top: 20}}>
                                        Reward
                                    </Text>
                                    <Text style={{...FONTS.largeTitle, color: COLORS.orange}}>
                                        .
                                    </Text>
                                </View>
                            );
                        } else {
                            return (
                                <Image
                                    source={icons.reward}
                                    resizeMode="contain"
                                    style={{
                                        width: 30,
                                        height: 30,
                                        tintColor: COLORS.grey,
                                    }}
                                />
                            );
                        }
                    },
                }}
            />
        </Tab.Navigator>
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
        toggleTheme: themeType => {
            return dispatch(toggleTheme(themeType));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomTab);
