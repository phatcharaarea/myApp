import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
// import { NavigationContainer} from '@react-navigation/native'
// import AppNavigator from './AppNavigator'

class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text>Home Screen</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('FlexRow')}>
                    <Text>Click</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default HomeScreen
