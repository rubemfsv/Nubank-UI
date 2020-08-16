import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Menu from '../pages/Menu';

const AppStack = createStackNavigator();

const Routes = () => (
    <AppStack.Navigator>
        <AppStack.Screen 
            name="Menu"
            component={Menu}
            options={{
                headerShown: false,
              }}
        />
    </AppStack.Navigator>
);

export default Routes;