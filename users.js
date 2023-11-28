import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { styles } from './usersStyle';

export default function Users(props) {

    const { navigate } = useNavigation();

    const {
        id,
        name,
        avatar,
        city,
        chengeUser,
        deleteUser,
    } = props;

    const item = {
        id,
        name,
        avatar,
        city,
    }

    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: avatar }}
                    />
                </View>
                <Text style={styles.generalText}>
                    Name: <Text style={styles.name}>{name}</Text>{'\n'}
                    City: <Text style={styles.city}>{city}</Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, {
                        backgroundColor: 'darkgreen',
                    }]}
                    onPress={() => {
                        navigate('Put', { item });
                    }}
                >
                    <Text style={styles.buttonText}>
                        Change
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, {
                        backgroundColor: 'darkred',
                    }]}
                    onPress={() => {
                        deleteUser(id);
                    }}
                >
                    <Text style={styles.buttonText}>
                        Delete
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}