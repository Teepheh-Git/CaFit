import 'react-native-gesture-handler';
import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import themeReducer from './src/stores/themeReducer';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import WelcomeScreen from './src/screens/WelcomeScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './src/navigation/BottonTab';

const Stack = createStackNavigator();
const store = createStore(themeReducer, applyMiddleware(thunk));


const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={'Welcome'}
                    screenOptions={{
                        headerShown: false,
                    }}>
                    <Stack.Screen name="Welcome" component={WelcomeScreen}/>
                    <Stack.Screen name="OnBoardScreen" component={OnBoardingScreen}/>
                    <Stack.Screen name="BottomTab" component={BottomTab}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
