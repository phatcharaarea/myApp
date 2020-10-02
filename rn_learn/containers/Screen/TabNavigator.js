import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Tab1 from '../../components/UI/Navigation/Tabs/Tab1';
import Tab2 from '../../components/UI/Navigation/Tabs/Tab2';
import Tab3 from '../../components/UI/Navigation/Tabs/Tab3';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createMaterialBottomTabNavigator();
// const Tab = createBottomTabNavigator();

const Tab1Op = {
    // tabBarLabel:
    //     <Text style={{fontSize:16,fontWeight:'bold',color:'yellow'}}>Sun</Text>
    // ,
    tabBarLabel: '',
    tabBarIcon: ({focused}) => (
        <Image 
            style={{
                height:45,
                width:45,
                // backgroundColor:'blue'
                
            }}
            resizeMode="contain"
            source={
                focused
                ? require('../../assets/sun/ic_sun_selected.png')//!ถ้าถูกโฟกัสให้ทำอันนี้
                : require('../../assets/sun/ic_sun.png')//!ถ้าไม่ถูกโฟกัสให้ทำอันนี้
            }
        /> 
    )
       
}

const Tab2Op = {
    tabBarLabel:'',
    tabBarIcon: ({focused}) => (
        <Image 
            style={{
                height:40,
                width:40,
                // backgroundColor:'blue'
                
            }}
            resizeMode="contain"
            source={
                focused
                ? require('../../assets/moon/ic_moon_selected.png')//!ถ้าถูกโฟกัสให้ทำอันนี้
                : require('../../assets/moon/ic_moon.png')//!ถ้าไม่ถูกโฟกัสให้ทำอันนี้
                
            }
        /> 
    )
}
const barStyles = {
    backgroundColor:'black',
    
}

class TabNavigator extends Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName="Tab1"
                // activeColor="#e91e63"
                // barStyle={{backgroundColor:'black',borderWidth:5,borderColor:'white'}}
                barStyle={barStyles}
                
            >
            <Tab.Screen
                name="Tab1"
                component={Tab1}
                options={Tab1Op}
                
            />
            <Tab.Screen
                name="Tab2"
                component={Tab2}
                options={Tab2Op}
                
            />

            {/* <Tab.Screen
                name="Tab3"
                component={Tab3}
                options={Tab2Op}
                
            /> */}
        
            </Tab.Navigator>
        )
    }
}

export default TabNavigator
