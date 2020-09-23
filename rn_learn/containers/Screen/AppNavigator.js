import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import FlexRow from '../../components/UI/Flex/FlexRow/FlexRow';
import FlexColumn from '../../components/UI/Flex/FlexColumn/FlexColumn';
import FlexColumn2 from '../../components/UI/Flex/FlexColumn/FlexColumn2';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

class AppNavigator extends Component {
    render() {
        return (
            <Stack.Navigator
                initialRouteName="HomeScreen"
                screenOptions={{gestureEnabled:true}}
            >

                <Stack.Screen 
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{title:"Home"}}
                />

                <Stack.Screen 
                    name="FlexRow"
                    component={FlexRow}
                    options={{title:"Flex Row"}}
                />

                <Stack.Screen 
                    name="FlexColumn"
                    component={FlexColumn}
                    options={{title:"Flex Column"}}
                />

                <Stack.Screen 
                    name="FlexColumn2"
                    component={FlexColumn2}
                    options={{title:"Flex Column2"}}
                />
                
            </Stack.Navigator>
        )
    }
}

export default AppNavigator
