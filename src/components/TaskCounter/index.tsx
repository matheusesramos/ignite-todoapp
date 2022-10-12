import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

type Props = {
    name: string;
    quantity: number;
    color: string;
}

export function TaskCounter({name, quantity, color}: Props) {
    return (
        <View style={styles.container}>
            <Text style={[styles.counterName, {color: color}]}>{name}</Text>
            <View style={styles.counterQuantityContainer}>
                <Text style={styles.counterQuantity}>{quantity}</Text>
            </View>
        </View>
    );
}