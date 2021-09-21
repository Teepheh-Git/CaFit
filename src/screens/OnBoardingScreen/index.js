import React, {useRef, useState} from 'react';
import {Animated, FlatList, Text, View} from 'react-native';
import {constants} from '../../constants';
import CustomButton from '../../components/CustomButton';
import {SIZES} from '../../constants/theme';
import {toggleTheme} from '../../stores/themeActions';
import {connect} from 'react-redux';
import OnBoardingItem from '../../components/OnboardingItem';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';


const Paginator = ({data, scrollX}) => {
    return (
        <View style={styles.pagination}>
            {data.map((_, index) => {
                const inputRange = [
                    (index - 1) * SIZES.width,
                    index * SIZES.width,
                    (index + 1) * SIZES.width,
                ];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 24, 10],
                    extrapolate: 'clamp',
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp',
                });

                return (
                    <Animated.View
                        style={[styles.dot, {width: dotWidth, opacity}]}
                        key={index.toString()}
                    />
                );
            })}
        </View>
    );
};

const OnBoardingScreen = ({appTheme}) => {

    const navigation = useNavigation();


    const scrollTo = () => {
        if (currentIndex < constants.slides.length - 1) {
            slidesRef.current.scrollToIndex({
                index: currentIndex + 1,
            });
        } else {
            navigation.navigate('BottomTab');
        }
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const slidesRef = useRef(null);

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

    return (
        <View style={[styles.root, {backgroundColor: appTheme.backgroundColor}]}>
            <FlatList
                data={constants.slides}
                keyExtractor={item => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                snapToAlignment={'center'}
                bounces={'false'}
                renderItem={({item}) => <OnBoardingItem item={item}/>}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: false},
                )}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                scrollEventThrottle={32}
                ref={slidesRef}
            />

            <Paginator data={constants.slides} scrollX={scrollX}/>

            <Text style={[styles.description, {color: appTheme.textColor2}]}>
                Let's start the week with a challenge with your best friends
            </Text>
            <View style={styles.buttonContainer}>
                <CustomButton text={'Next'} onPress={scrollTo}/>
            </View>
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
        toggleTheme: themeType => {
            return dispatch(toggleTheme(themeType));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OnBoardingScreen);
