import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Svg1, Svg2, Svg3, Svg4} from './src/constants/Svg';

const TestFile = () => {


    return (
        <ScrollView contentContainerStyle={styles.root}>
            <Svg1/>
            <Text>TestFile</Text>


            <Svg2/>
            <Svg4/>
            <Svg3/>


        </ScrollView>
    );
};


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'grey',
        // width: '100%',
        // height: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

});

export default TestFile;
