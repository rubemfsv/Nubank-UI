import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

// import './config/ReactotronConfig';

import Routes from './routes/routes';

const Main = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
            <Routes />
        </NavigationContainer>
    );
};

export default Main;