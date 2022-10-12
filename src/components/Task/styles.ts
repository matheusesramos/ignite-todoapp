import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: '#262626',
        marginBottom: 8,
        alignItems: 'center'
    },

    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 24,
        borderWidth: 2,
        marginRight: 16,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
    },

    uncheckedTask: {
        borderColor: '#4EA8DE',
    },

    checkedTask: {
        borderColor: '#5E60CE',
        backgroundColor: '#5E60CE',
    },

    title: {
        flex: 1,
        fontSize: 16,
        color: '#F2F2F2'
    },

    buttonDelete: {
        width: 24,
        height: 24,
        padding: 4,
        // backgroundColor: 'red',
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 16,
    },

    icon: {
        width: '100%',
        height: '100%'
    }
});