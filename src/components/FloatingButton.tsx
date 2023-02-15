import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../interface/StacksInterface';

const FloatingButton = () => {

  const { navigate } = useNavigation<HomeScreenNavigationProp>();

  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#7AB34B',
        borderRadius: 100,
        elevation: 3,
      }}
      onPress={() => navigate('AddTask')}
    >
    <Icon name='add-outline' size={35} color='white' />
  </TouchableOpacity>
  )
}

export default FloatingButton