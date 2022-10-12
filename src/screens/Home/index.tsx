import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Alert, Keyboard } from 'react-native';

import { styles } from './styles';
import logo from '../../assets/images/logo.png';
import plusIcon from '../../assets/images/plus.png';
import listIcon from '../../assets/images/list.png';

import { TaskCounter } from '../../components/TaskCounter';
import { Task } from '../../components/Task';

type Task = {
    title: string;
    status: boolean;
};

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskTitle, setTaskTitle] = useState('');

    function handleTaskAdd() {
        if (tasks.some(task => task.title === taskTitle)) {
            return Alert.alert("Temos um problema", "Já existe uma task com esse título.");
        }

        if(taskTitle === '') {
            return Alert.alert("Temos um problema", "Não é possível adicionar uma task vazia.");
        }

        setTasks(prevState => [...prevState, {title: taskTitle, status: false}]);
        setTaskTitle('');
        Keyboard.dismiss();
    }

    function handleTaskRemove(task: Task) {
        Alert.alert("Atenção!", "Deseja remover a task?", [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(item => item.title !== task.title))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    function handleTaskCheck(task: Task) {
        let updatedTasks = tasks.map(item => {
            if(item.title === task.title) {
                return {...item, status: true};
            }
            return item;
        })
        setTasks(updatedTasks);
    }

	return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image style={styles.logoImg} source={logo} resizeMode="contain" />
            </View>

            <View style={styles.formTask}>
                <TextInput 
                    style={styles.inputTask} 
                    placeholder="Adicione uma nova tarefa" 
                    placeholderTextColor="#808080" 
                    onChangeText={setTaskTitle}
                    value={taskTitle}
                />
                <TouchableOpacity 
                    style={styles.buttonAddTask} 
                    onPress={handleTaskAdd}
                >
                    <Image style={styles.addTaskButtonIcon} source={plusIcon} resizeMode="contain" />
                </TouchableOpacity>
            </View>

            <View style={styles.labels}>
                <TaskCounter name="Criadas" quantity={tasks.filter(item => item.status === false).length} color="#4EA8DE" />
                <TaskCounter name="Concluídas" quantity={tasks.filter(item => item.status === true).length} color="#8284FA" />
            </View>

            <FlatList 
                style={styles.tasks } 
                data={tasks} 
                keyExtractor={(item: Task) => item.title} 
                renderItem={({item}) => (
                    <Task 
                        key={item.title} 
                        title={item.title} 
                        status={item.status} 
                        onRemove={() => handleTaskRemove(item)} 
                        onCheck={() => handleTaskCheck(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.emptyList}>
                        <Image style={styles.emptyListIcon} source={listIcon} resizeMode="contain" />
                        <Text style={styles.listEmptyTitle}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={styles.listEmptySubtitle}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            />

        </View>
    );
}