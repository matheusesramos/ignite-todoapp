import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },

    header: {
        height: 200,
        width: '100%',
        paddingHorizontal: 24,
        backgroundColor: '#0D0D0D',
        alignItems: 'center', 
        justifyContent: 'center'
    },

    logoImg: {
        width: 120, 
        height: 32 * (120 / 111),
    },

    formTask: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 24,
        marginTop: -28,
    },

    inputTask: {
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 8,
        color: '#F2F2F2', 
        padding: 16,
        fontSize: 16,
        marginRight: 8
    },

    buttonAddTask: {
        width: 56,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    
    addTaskButtonIcon: {
        width: '100%',
        height: '100%',
    },

    labels: {
        paddingTop: 28,
        marginHorizontal: 24,
        paddingBottom: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#333333',
    },

    tasks: {
        padding: 24,
        // backgroundColor: 'blue'
    },

    emptyList: {
        alignItems: 'center',
        marginTop: 24,
    },

    emptyListIcon: {
        width: '75%', 
        height: '75%',
        marginBottom: 16,
    },

    listEmptyTitle: {
        color: '#808080',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 4
    },

    listEmptySubtitle: {
        color: '#808080',
        fontSize: 16,
        textAlign: 'center'
    }
});