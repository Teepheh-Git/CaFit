import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {applyMiddleware, createStore} from 'redux';
import themeReducer from './src/stores/themeReducer';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import WelcomeScreen from './src/sceens/WelcomeScreen';

const store = createStore(themeReducer, applyMiddleware(thunk));

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <WelcomeScreen/>
            </SafeAreaView>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
