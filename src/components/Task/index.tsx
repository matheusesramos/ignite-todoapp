import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import trashIcon from '../../assets/images/trash.png';
import checkIcon from '../../assets/images/check.png';

import { styles } from './styles';

type Task = {
    title: string;
    status: boolean;
    onRemove: () => void;
    onCheck: () => void;
};

export function Task({title, status, onRemove, onCheck}: Task) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.checkbox, status ? styles.checkedTask : styles.uncheckedTask]} onPress={onCheck}>
                {status ? <Image source={checkIcon} resizeMode="contain" style={styles.icon} /> : <></>}
            </TouchableOpacity>
            <Text 
                style={styles.title} 
                numberOfLines={2}
            >
                {title}
            </Text>
            <TouchableOpacity style={styles.buttonDelete} onPress={onRemove}>
                <Image style={styles.icon} source={trashIcon} resizeMode="contain" />
            </TouchableOpacity>
        </View>
    );
}