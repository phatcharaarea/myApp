import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HomeScreen from './containers/Screen/HomeScreen'
import { NavigationContainer} from '@react-navigation/native'
import AppNavigator from './containers/Screen/AppNavigator'
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>

    )
  }
}

export default App
