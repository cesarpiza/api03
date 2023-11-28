import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'darkorange',
        marginVertical: 3,
        padding: 20,
        borderRadius: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarContainer: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        borderColor: '#000',
        overflow: 'hidden',
    },
    avatar: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    generalText: {
        fontSize: 14,
        marginLeft: 15,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    city: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonText: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: 'bold',
    }
});