import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { useTasks } from '../hooks/useTasks';
import { HomeScreenNavigationProp } from '../interface/StacksInterface';
import { useNavigation } from '@react-navigation/native';

const AddTask = () => {

  const { goBack } = useNavigation<HomeScreenNavigationProp>();
  const { addTask, newTask, setNewTask } = useTasks();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Describa Su Tarea</Text>
      <TextInput 
        style={styles.input}
        onChangeText={(text) => setNewTask({...newTask, text})}
        placeholder='Escribe aqui tu tarea'
      />
      <TouchableOpacity style={styles.btn} 
        onPress={() => {
          addTask()
          goBack()
        }}
      >
        <Text style={styles.textBtn}>Guardar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    justifyContent: 'center'
  },
  label: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  },
  input: {
    borderWidth: 2,
    height: 50,
    padding: 15,
    marginVertical: 20,
    borderColor:'#7AB34B',
    borderRadius: 8,
  },
  btn: {
    backgroundColor: '#7AB34B',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: 250,
    alignSelf: 'center',
    marginTop: 30
  },
  textBtn: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold'
  }
});


export default AddTask