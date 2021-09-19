import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {applyMiddleware, createStore} from 'redux';
import themeReducer from './src/stores/themeReducer';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import WelcomeScreen from './src/screens/WelcomeScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen';

const store = createStore(themeReducer, applyMiddleware(thunk));

const App = () => {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <OnBoardingScreen/>
            </View>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
