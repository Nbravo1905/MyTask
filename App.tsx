import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import AppStackNavigator from './src/routes/AppStackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor='#121212' />
      <AppStackNavigator />
    </NavigationContainer>
  )
}

export default App