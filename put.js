import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { styles } from './putStyle';
import axios from 'axios';

export default function Put(props) {
    const url = 'http://192.168.0.103:8080/api';
    const [inputName, setInputName] = useState('');
    const [inputCity, setInputCity] = useState('');

    const { navigate } = useNavigation();

    const {
        id,
        name,
        city,
        avatar,
    } = props.route.params.item;

    const chengeUser = async () => {
        try {
            const response = await axios.put(`${url}/${id}`, {
                name: inputName.length === 0 ? name : inputName,
                avatar: avatar,
                city: inputCity.length === 0 ? city : inputCity,
            })
            console.log(response.data);
            navigate('Home');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>name: {name}</Text>
                    <TextInput
                        autoFocus
                        value={inputName}
                        style={styles.input}
                        placeholder={'Enter new name'}
                        onChangeText={(text) => setInputName(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>city: {city}</Text>
                    <TextInput
                        value={inputCity}
                        style={styles.input}
                        placeholder={'Enter new name'}
                        onChangeText={(text) => setInputCity(text)}
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        chengeUser();
                    }}
                >
                    <Text style={styles.buttonText}>
                        Change user
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}