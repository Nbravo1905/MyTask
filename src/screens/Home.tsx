import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

import FloatingButton from '../components/FloatingButton';
import Task from '../components/Task';
import { useTasks } from '../hooks/useTasks';
import { PropsTypeTask } from '../interface/TaskInterface';

const Home = () => {

  const { tasks, isLoading } = useTasks();

  if(isLoading) {
    return (
      <View>
        <ActivityIndicator size={'large'} color={'red'} />
      </View>
    )
  }

  return (
    <SafeAreaView style={stylesHome.container}>
      <FlatList<PropsTypeTask>
        style={stylesHome.tasks}
        data={tasks}
        renderItem={item => (<Task {...item.item} key={item.index} />)}
        showsVerticalScrollIndicator={false}
      />

      <FloatingButton />
    </SafeAreaView>
  )
}

const stylesHome = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white'
  },
  tasks: {
    marginTop: 15,
    marginHorizontal: 18,
  },
  subTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
    color: 'black',
    borderBottomWidth: 1,
    paddingBottom: 5,
  }
});

export default Home