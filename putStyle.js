import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    container: {
        backgroundColor: 'darkorange',
        padding: 30,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 6,
    },
    input: {
        backgroundColor: '#fff',
        fontSize: 16,
        padding: 8,
        color: '#000',
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignSelf: 'center',
        backgroundColor: 'darkgreen',
    },
    buttonText: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: 'bold',
    }
});