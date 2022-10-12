import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },

    counterName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8
    },

    counterQuantityContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        borderRadius: 8,
        backgroundColor: '#333333'
    },

    counterQuantity: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#F2F2F2',
    },
});