import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Create from '../screens/Create'
import Detail from '../screens/Detail'
import Main from '../screens/Main'

const Navigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="Main"
                    component={Main}
                />
                <Stack.Screen
                    name="Detail"
                    component={Detail}
                />
                <Stack.Screen
                    name="Create"
                    component={Create}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator