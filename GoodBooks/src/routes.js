import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home.js'
import Dashboard from './pages/Dashboard.js'
import About from './pages/About.js'

const Stack = createStackNavigator() 

export default function Routes() {
    return (
        <NavigationContainer >
            <Stack.Navigator >
                <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} /> 
                <Stack.Screen options={
                    {   title: 'Books', 
                        headerTintColor: '#E5585B',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: '#252525'
                        },
                    }} 
                    name="Dashboard" 
                    component={Dashboard} 
                />
                <Stack.Screen options={
                    {   title: 'About', 
                        headerTintColor: '#E5585B',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: '#252525'
                        },
                    }} 
                    name="About" 
                    component={About} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
