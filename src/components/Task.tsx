import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { PropsTypeTask } from '../interface/TaskInterface';

import { useTasks } from '../hooks/useTasks';
import Icon from 'react-native-vector-icons/Ionicons';


const Task = ({id, text, pending, createAt}: PropsTypeTask) => {

  const [check, setCheck] = useState<boolean>(pending);
  const { setTaskState } = useTasks();

  const onChange = () => {
    setCheck(!check);
    setTaskState(id, !check);
  }

  return (
    <View>
      <TouchableOpacity 
        style={[styleTask.card, check 
          ? {borderRightColor: 'red'}
          : {borderRightColor: '#7AB34B'}
        ]}
        onPress={() => onChange()}
      >
        <View style={{flexDirection: 'row'}}>
          {check ? (
            <View style={styleTask.checkP} />
          ) : (
            <View style={styleTask.check}>
              <Icon name='checkmark-outline' size={20} color='white' />
            </View>
          )}
          <View>
            <Text style={styleTask.text}>{text}</Text>
            <Text style={styleTask.date}>{createAt.toString()}</Text>
          </View>
        </View>
        <View>
          <Text style={[styleTask.text, {color: pending ? 'red'
            : '#7AB34B'}]}>{
            pending ? 'Pendiente'
              : 'Completada'
          }</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styleTask = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    height: 70,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 5,
    borderWidth: 0.2,
    borderRightWidth: 10,
    justifyContent: 'space-between'
  },
  check: {
    borderRadius: 100,
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: '#7AB34B',
    marginRight: 10,
    backgroundColor: '#7AB34B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkP: {
    borderRadius: 100,
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: 'red',
    marginRight: 10
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  date: {
    color: '#B0B0B0',
    fontSize: 13
  }
})

export default Task