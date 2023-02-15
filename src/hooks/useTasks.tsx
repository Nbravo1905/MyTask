import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import uuid from 'react-native-uuid';
import { addDoc, collection, doc, onSnapshot, orderBy, query, updateDoc } from 'firebase/firestore';


import { Task as ITask } from '../interface/TaskInterface';

import { database } from '../data/firebase';

export const useTasks = () => {

  const [isLoading, setLoading] = useState<boolean>(false);

  const [tasks, setTasks] = useState<ITask[]>([]);

  const [newTask, setNewTask] = useState<ITask>({
    id: uuid.v4().toString(),
    text: '',
    pending: true,
    createAt: new Date()
  })

  const setTaskState = (id:string, state:boolean) => {
    
    const docRef = doc(database, 'tasks', id);
    updateDoc(docRef, {
      pending: state
    });
    
  }

  const addTask = async () => {

    setLoading(true);

    await addDoc(collection(database, 'tasks'), newTask);

    setLoading(false);

  }

  useEffect(() => {
    const collectionRef = collection(database, 'tasks');

    let q = query(collectionRef, orderBy("createAt", 'desc'));
      q = query(collectionRef, orderBy("pending", "desc"));

    const unsub = onSnapshot(q, snap => {
      setTasks(
        snap.docs.map(doc => (
          {
            id: doc.id,
            text: doc.data().text,
            pending: doc.data().pending,
            createAt: doc.data().createAt.toDate().toDateString(),
          }
        ))
      )
      
    })


    return unsub;

  }, [])

  return {
    tasks,
    setTaskState,
    newTask,
    setNewTask,
    isLoading,
    addTask
  }
}