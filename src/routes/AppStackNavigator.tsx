import { View, Text } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import AddTask from '../screens/AddTask';
import { RootStackParamList } from '../interface/StacksInterface';

const AppStackNavigator = () => {

  const AppStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <AppStack.Navigator>
      <AppStack.Screen
        options={{
          title: 'Lista de Tareas'
        }}
        name='Home' 
        component={Home} 
      />
      <AppStack.Screen
        options={{
          title: 'Crear tarea',
          presentation: 'modal'
        }}
        name='AddTask' 
        component={AddTask} 
      />
    </AppStack.Navigator>
  )
}

export default AppStackNavigator;