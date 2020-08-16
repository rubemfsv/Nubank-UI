import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import './config/ReactotronConfig';

import Routes from './routes/routes';

const Main = () => {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    );
};

export default Main;