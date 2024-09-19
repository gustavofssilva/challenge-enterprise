import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Alert, ImageBackground, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TODO_LIST_KEY = 'todo_list';
const { width, height } = Dimensions.get('window');

export default function TodoListScreen() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem(TODO_LIST_KEY);
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
      }
    };

    loadTasks();
  }, []);

  const addTask = async () => {
    if (task.trim()) {
      const newTasks = [...tasks, { id: Math.random().toString(), title: task }];
      setTasks(newTasks);
      setTask('');
      try {
        await AsyncStorage.setItem(TODO_LIST_KEY, JSON.stringify(newTasks));
      } catch (error) {
        console.error('Erro ao salvar tarefa:', error);
      }
    } else {
      Alert.alert('Erro', 'Digite uma tarefa.');
    }
  };

  const removeTask = async (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
    try {
      await AsyncStorage.setItem(TODO_LIST_KEY, JSON.stringify(newTasks));
    } catch (error) {
      console.error('Erro ao remover tarefa:', error);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/fotos-gratis/fundo-azul-do-gradiente-de-luxo-abstrato-liso-azul-escuro-com-vinheta-preta-studio-banner_1258-54583.jpg?w=740&t=st=1726762697~exp=1726763297~hmac=bd5b956e575ca304078c0107eb121dc15d49b173d457dfa389e2b2debb4fd184'  }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>To-Do List</Text>
        <TextInput
          style={styles.input}
          placeholder="Nova tarefa"
          placeholderTextColor="#B0B0B0"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.taskContainer}>
              <Text style={styles.taskText}>{item.title}</Text>
              <TouchableOpacity onPress={() => removeTask(item.id)}>
                <Text style={styles.removeTask}>Excluir</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    marginBottom: 15,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FF6F61',
    borderRadius: 25,
    paddingVertical: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginBottom: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
  },
  removeTask: {
    color: 'red',
    fontWeight: 'bold',
  },
});
