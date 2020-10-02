import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import FlexRow from '../../components/UI/Flex/FlexRow/FlexRow';
import FlexColumn from '../../components/UI/Flex/FlexColumn/FlexColumn';
import FlexColumn2 from '../../components/UI/Flex/FlexColumn/FlexColumn2';
import HomeScreen from './HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Tab1 from '../../components/UI/Navigation/Tabs/Tab1';
// import Tab2 from '../../components/UI/Navigation/Tabs/Tab2';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TabScreen from './TabNavigator';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

// const Tab1Op = {
    
//     tabBarLabel:'Moon',
    
//     tabBarIcon: ({focused}) => (
//         <Image 
//             style={{
//                 height:40,
//                 width:40,
                
//             }}
//             resizeMode="contain"
//             source={
//                 focused
//                 ? require('../../assets/moon/ic_moon_selected.png')//!ถ้าถูกโฟกัสให้ทำอันนี้
//                 : require('../../assets/moon/ic_moon.png')//!ถ้าไม่ถูกโฟกัสให้ทำอันนี้
//             }
//         />
    

        
//     )
// }
// const Tab2Op = {
// }



// const TabScreens = () => {
//     return (
//         <Tab.Navigator 
//             initialRouteName="Tab1"
//             >
//             <Tab.Screen
//                 name="Tab1"
//                 component={Tab1}
//                 options={Tab1Op}
//             />

//             <Tab.Screen 
//                 name="Tab2"
//                 component={Tab2}
//                 options={Tab2Op}
//             />
            
//         </Tab.Navigator>
//     )
// }
const tabStyles = {
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerStyle:{
        backgroundColor:'black'
    }

}

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
                    options={{
                        title:"Home",
                        headerStyle:{
                            backgroundColor:'black'
                        },
                        headerTintColor:'white',
                    }}
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

                <Stack.Screen 
                    name="TabScreen"
                    component={TabScreen}
                    options={tabStyles}
                />
                
            </Stack.Navigator>
        )
    }
}

export default AppNavigator
