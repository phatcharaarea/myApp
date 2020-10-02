import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
// import { NavigationContainer} from '@react-navigation/native'
// import AppNavigator from './AppNavigator'

class HomeScreen extends Component {

    render() {
        //!เปลี่ยน style header
        this.props.navigation.setOptions({
            headerStyle:{
                backgroundColor:'black'
            },
            headerRight: () => (
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{padding:10}}
                    onPress={() => alert('Help')}
                    >
                    <Text style={{color:'white'}}>Help</Text>
                </TouchableOpacity>
            )

        })

        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View style={{flex:1}}>
                    <Text style={{fontSize:20}}>Home Screen</Text>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FlexRow')}>
                        <Text style={{fontSize:15}}>Flex Screen</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('TabScreen')}>
                        <Text style={{fontSize:15}}>Tab Screen</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default HomeScreen
