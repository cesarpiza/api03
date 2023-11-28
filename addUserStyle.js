import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#999',
        padding: 30,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 6,
    },
    input: {
        backgroundColor: '#555',
        fontSize: 16,
        padding: 8,
        color: '#fff',
    },
    button: {
        width: 100,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkblue',
        alignSelf: 'center',
        marginTop: 6,
    },
    buttonText: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
    }
});